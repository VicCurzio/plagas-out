/**
 * Verifica la regla de capas del front.
 *
 *   screens  ->  domain  ->  shared
 *
 * Las flechas van en un solo sentido. `shared/` no puede importar nada de
 * `domain/` ni de `screens/`: si un componente compartido necesita saber algo
 * del negocio, dejo de ser compartido. Y dos dominios distintos no se importan
 * entre si: lo comun sube a `shared/` o los orquesta la pantalla.
 *
 * Por que un script propio y no un plugin del linter: este repo usa oxlint, que
 * no trae reglas de limites entre capas. Y hay una leccion prestada de Cicare
 * (2026-08-13): alla la regla estuvo configurada, activa y sin detectar nada
 * porque el plugin no sabia resolver el alias de imports, y los salteaba en
 * silencio. Un chequeo que no puede fallar no protege nada, asi que antes de
 * revisar el codigo real este script se prueba a si mismo con un import que
 * TIENE que rechazar. Si no lo rechaza, corta.
 *
 * Uso: node scripts/check-layers.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const SRC = 'src';

/** Que puede importar cada capa. Lo que no esta listado, no se puede. */
const PERMITIDO = {
    app: ['app', 'screens', 'domain', 'shared'],
    screens: ['screens', 'domain', 'shared'],
    domain: ['domain', 'shared'],
    shared: ['shared'],
};

/**
 * Los segmentos de una ruta, venga con barras de Windows o de Linux.
 * `split(sep)` parte por el separador del sistema y el segundo split cubre las
 * rutas que ya venian con barras normales, asi el chequeo da lo mismo en la
 * maquina y en el runner de Actions.
 */
function segmentos(ruta) {
    return ruta.split(sep).join('/').split('/').filter(Boolean);
}

/** La capa de un archivo, a partir de su ruta dentro de src/. */
function capaDe(rutaRelativa) {
    const primero = segmentos(rutaRelativa)[0];
    if (primero === 'screens' || primero === 'domain' || primero === 'shared') return primero;
    return 'app'; // main.tsx, App.tsx, index.css
}

/** El area de negocio, para los archivos de domain/: `domain/contact/x.ts` -> `contact`. */
function areaDe(rutaRelativa) {
    const partes = segmentos(rutaRelativa);
    return partes[0] === 'domain' ? partes[1] : null;
}

function importsDe(codigo) {
    const encontrados = [];
    const patrones = [
        /\bimport\s[^'"]*?from\s*['"]([^'"]+)['"]/g,
        /\bimport\s*['"]([^'"]+)['"]/g,
        /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
    ];
    for (const patron of patrones) {
        let m;
        while ((m = patron.exec(codigo)) !== null) encontrados.push(m[1]);
    }
    return encontrados;
}

/**
 * Revisa un archivo. Devuelve la lista de violaciones encontradas.
 * Es una funcion pura sobre (ruta, codigo) para poder probarla sin tocar el disco.
 */
function revisar(rutaRelativa, codigo) {
    const capa = capaDe(rutaRelativa);
    const area = areaDe(rutaRelativa);
    const violaciones = [];

    for (const especificador of importsDe(codigo)) {
        // Solo interesan los imports internos: un paquete de node_modules no
        // tiene capa.
        if (!especificador.startsWith('.')) continue;

        const destinoAbsoluto = resolve(dirname(join(SRC, rutaRelativa)), especificador);
        const destinoRelativo = relative(resolve(SRC), destinoAbsoluto);

        // Un import que se va de src/ no es asunto de esta regla.
        if (destinoRelativo.startsWith('..')) continue;

        const capaDestino = capaDe(destinoRelativo);
        if (!PERMITIDO[capa].includes(capaDestino)) {
            violaciones.push(
                `${rutaRelativa}: ${capa} no puede importar de ${capaDestino} (${especificador})`
            );
            continue;
        }

        const areaDestino = areaDe(destinoRelativo);
        if (capa === 'domain' && capaDestino === 'domain' && area !== areaDestino) {
            violaciones.push(
                `${rutaRelativa}: domain/${area} no puede importar de domain/${areaDestino} ` +
                    '(lo comun sube a shared/, o lo orquesta la screen)'
            );
        }
    }

    return violaciones;
}

/** El chequeo se prueba a si mismo antes de creerle a un resultado en verde. */
function autoprueba() {
    const casos = [
        ['shared/ui/Boton.tsx', "import { contactInfo } from '../../domain/contact/contactInfo';"],
        ['domain/pagos/cobro.ts', "import { contactInfo } from '../contact/contactInfo';"],
        ['shared/lib/x.ts', "import Home from '../../screens/home/Home';"],
    ];

    for (const [ruta, codigo] of casos) {
        if (revisar(ruta, codigo).length === 0) {
            console.error(
                'FALLO: el chequeo de capas no detecta un import que deberia rechazar.\n' +
                    `  ${ruta} -> ${codigo}\n` +
                    'La regla quedo en cero sin avisar. Revisa capaDe() y importsDe().'
            );
            process.exit(1);
        }
    }
}

function archivosDe(directorio) {
    const salida = [];
    for (const entrada of readdirSync(directorio)) {
        const completa = join(directorio, entrada);
        if (statSync(completa).isDirectory()) salida.push(...archivosDe(completa));
        else if (/\.(ts|tsx|js|jsx)$/.test(entrada)) salida.push(completa);
    }
    return salida;
}

autoprueba();

const violaciones = archivosDe(SRC).flatMap((archivo) => {
    const rutaRelativa = relative(SRC, archivo).split(sep).join('/');
    return revisar(rutaRelativa, readFileSync(archivo, 'utf8'));
});

if (violaciones.length > 0) {
    console.error('La regla de capas fue violada:\n');
    for (const v of violaciones) console.error(`  ${v}`);
    console.error('\nRegla: screens -> domain -> shared. Nunca al reves.');
    process.exit(1);
}

console.log('Regla de capas: sin violaciones.');

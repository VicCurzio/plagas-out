# Plagas Out

[![Deploy](https://github.com/VicCurzio/plagas-out/actions/workflows/deploy.yml/badge.svg)](https://github.com/VicCurzio/plagas-out/actions/workflows/deploy.yml)

Sitio de presentación y contacto para un servicio de control de plagas en La
Plata. Una sola página: servicios, galería, testimonios y un formulario que
manda la consulta por correo.

En producción: <https://viccurzio.github.io/plagas-out/>

## Requisitos

| | |
|---|---|
| Node | 20 o superior |
| Base de datos | no usa |
| Servicios externos | EmailJS (opcional, para el formulario) |

## Puesta en marcha (local, en cinco minutos)

```bash
git clone https://github.com/VicCurzio/plagas-out.git && cd plagas-out
npm install
cp .env.example .env    # se puede dejar vacío: ver "Configuración"
npm run dev
```

Abre en <http://localhost:5173/plagas-out/>.

## Verificación

No hay suite de tests todavía. Lo que sí corre y hay que mantener en verde:

```bash
npm run lint       # oxlint + la regla de capas
npm run typecheck  # tsc
```

Los dos corren en GitHub Actions en cada push y en cada pull request, y el
despliegue depende de que pasen.

## Cómo se despliega

Automático. Al pushear a `main`, `.github/workflows/deploy.yml` verifica,
compila y publica en GitHub Pages.

**Importante:** Vite congela las variables de entorno dentro del bundle en el
momento de compilar. Las credenciales de EmailJS tienen que estar cargadas en
**Settings > Secrets and variables > Actions** del repositorio; si no están, el
sitio publicado queda sin envío por correo y todas las consultas caen al
respaldo de `mailto:`.

## Configuración

Las cuatro variables están documentadas en `.env.example` y se leen en un solo
lugar, `src/shared/config/env.ts`, que las verifica al arrancar.

| Variable | Para qué |
|---|---|
| `VITE_EMAILJS_PUBLIC_KEY` · `VITE_EMAILJS_SERVICE_ID` · `VITE_EMAILJS_TEMPLATE_ID` | Envío del formulario por correo. Opcionales: las tres o ninguna. |
| `VITE_CONTACT_EMAIL` | Casilla que recibe las consultas y se muestra en la sección de contacto. |

**Sin EmailJS el formulario sigue funcionando:** abre el cliente de correo del
visitante con la consulta ya cargada. Es a propósito, para no perder una
consulta por un problema de configuración. Lo que no es válido es cargar
algunas variables y otras no: en desarrollo el sitio se niega a arrancar y en
producción lo avisa por consola, porque ese estado significa que alguien creyó
que el envío estaba configurado y no lo está.

## Estructura del código

El corte es por área, no por tipo de archivo: abrir "contacto" es abrir una
carpeta, no perseguir el mismo concepto por `components/`, `hooks/` y
`services/`.

```text
src/
  main.tsx  App.tsx        # monta la aplicación
  screens/home/            # la pantalla: Header, Hero, Servicios, Galería… y el Footer
  domain/contact/          # lo que es del negocio: datos de contacto y envío del formulario
  shared/ui/               # genérico y sin negocio: Reveal, ImagePlaceholder
  shared/config/           # variables de entorno verificadas
  index.css                # estilos globales
```

**La regla de dependencia:**

```text
screens  ->  domain  ->  shared
```

Las flechas van en un solo sentido. `shared/` no importa nada de `domain/` ni de
`screens/`: si un componente compartido necesita saber algo del negocio, dejó de
ser compartido. Dos áreas de `domain/` distintas tampoco se importan entre sí.

La regla la verifica `scripts/check-layers.mjs`, que corre dentro de
`npm run lint`. Una regla de arquitectura que nadie ejecuta no existe: dura tres
commits. El script además se prueba a sí mismo antes de revisar el código, con
imports que tiene que rechazar — un chequeo que no puede fallar no protege nada.

## Entrega y versiones

Mensajes de commit con [Conventional Commits](https://www.conventionalcommits.org/es/)
(`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`) y versiones semánticas.

```bash
npm run release -- patch --tag   # sube package.json, fecha el CHANGELOG y crea el tag
```

## Pendiente

- Reemplazar las imágenes de muestra: los bloques con `ImagePlaceholder` sin
  `src` son los que faltan.
- El número de WhatsApp es de ejemplo (`+54 221 000-0000`). Está en un solo
  lugar: `src/domain/contact/contactInfo.ts`.

/**
 * Genera public/og.jpg, la placa que ven WhatsApp, LinkedIn e Instagram cuando
 * alguien pega el link del sitio.
 *
 * La fuente es scripts/og-card.html, que usa los mismos colores y la misma
 * tipografia que la pagina. Esto solo la saca a 1200x630 y la guarda.
 *
 * Por que un script y no una imagen suelta en public/: una imagen sin fuente
 * no se puede retocar, solo rehacer a ojo. Con el HTML al lado, cambiar una
 * cifra del hero es editar una linea y volver a correr esto.
 *
 * Por que playwright-core y no playwright: core NO descarga navegadores al
 * instalarse. Usa el Chrome que ya esta en la maquina (channel: "chrome"), asi
 * que esta dependencia no le agrega una descarga de navegador a cada `npm ci`
 * del CI, que no necesita generar nada.
 *
 * Dos cosas que costaron la primera vez (2026-10-02):
 *   - `newPage({ viewportSize })` no aplico el tamanio y la captura salio en
 *     1280x720. Lo que funciona es setViewportSize mas un clip explicito.
 *   - Hay que esperar a que las fuentes esten cargadas: sin eso, la placa sale
 *     con la tipografia de respaldo y no se parece al sitio.
 * Por eso al final mide el archivo generado en vez de confiar en lo pedido.
 *
 * Uso: npm run og
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const WIDTH = 1200;
const HEIGHT = 630;

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "scripts/og-card.html");
const target = resolve(root, "public/og.jpg");

let browser;
try {
  browser = await chromium.launch({ channel: "chrome" });
} catch (error) {
  console.error("No pude abrir Chrome. playwright-core no trae navegador propio: usa el Chrome instalado en la maquina.");
  console.error(String(error.message).split("\n")[0]);
  process.exit(1);
}

const page = await browser.newPage();
await page.setViewportSize({ width: WIDTH, height: HEIGHT });
await page.goto(pathToFileURL(source).href);
await page.waitForFunction(() => document.fonts.status === "loaded");
await page.screenshot({
  path: target,
  type: "jpeg",
  quality: 88,
  clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
});
await browser.close();

// Mide el JPEG recien escrito: busca el marcador SOF, que lleva el alto y el
// ancho reales. Si el viewport no se aplico, esto lo descubre ahora y no
// cuando LinkedIn recorta la tarjeta.
const bytes = readFileSync(target);
let at = 2;
let width = 0;
let height = 0;
while (at < bytes.length) {
  if (bytes[at] !== 0xff) {
    at += 1;
    continue;
  }
  const marker = bytes[at + 1];
  if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
    height = bytes.readUInt16BE(at + 5);
    width = bytes.readUInt16BE(at + 7);
    break;
  }
  at += 2 + bytes.readUInt16BE(at + 2);
}

if (width !== WIDTH || height !== HEIGHT) {
  console.error(`La imagen salio en ${width}x${height} y tiene que ser ${WIDTH}x${HEIGHT}.`);
  process.exit(1);
}

console.log(`public/og.jpg  ${width}x${height}  ${Math.round(bytes.length / 1024)} KB`);
console.log("Las medidas estan declaradas en index.html (og:image:width / og:image:height): si cambian aca, cambialas alla.");

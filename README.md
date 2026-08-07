# Plagas Out

Sitio web de presentación y contacto para servicio de control de plagas.

## Descripción

Plagas Out es una landing page moderna construida con React y TypeScript que presenta servicios de control de plagas. Incluye secciones de presentación, servicios, galería, testimonios y formulario de contacto.

## Stack

- **Runtime:** Node.js (v24+)
- **Framework:** React 19.2.8
- **Lenguaje:** TypeScript 6.0.2
- **Build:** Vite 8.2.0
- **Linting:** Oxlint 1.75.0
- **Email:** emailJS (configurar)

## Instalación

```bash
npm install
```

## Scripts

- `npm run dev` — Inicia servidor de desarrollo (Vite)
- `npm run build` — Compila TypeScript y construye con Vite
- `npm run lint` — Ejecuta Oxlint para análisis estático
- `npm run preview` — Previsualiza el build compilado

## Estructura

```
src/
├─ App.tsx                  # Componente raíz
├─ main.tsx                 # Entry point
├─ index.css                # Estilos globales
└─ components/
   ├─ Header.tsx            # Encabezado / navegación
   ├─ Hero.tsx              # Sección hero
   ├─ Services.tsx          # Servicios ofrecidos
   ├─ Gallery.tsx           # Galería de fotos
   ├─ Testimonials.tsx      # Testimonios de clientes
   ├─ WhyUs.tsx             # Por qué elegirnos
   ├─ Specials.tsx          # Ofertas especiales
   ├─ HowWeWork.tsx         # Cómo trabajamos
   ├─ Contact.tsx           # Formulario de contacto (emailJS pendiente)
   ├─ About.tsx             # Acerca de
   ├─ Footer.tsx            # Pie de página
   ├─ WhatsAppButton.tsx     # Botón flotante de WhatsApp
   ├─ Reveal.tsx            # Componente de animación
   └─ ImagePlaceholder.tsx   # Placeholder de imágenes
```

## Configuración

### Variables de entorno

Copia `.env.example` a `.env` y configura los valores:

```bash
cp .env.example .env
```

Variables requeridas:

```env
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_CONTACT_EMAIL=info@plagasout.com.ar
```

### EmailJS (Por completar)

El proyecto tiene `@emailjs/browser` instalado pero la integración aún no está implementada en `Contact.tsx`. Actualmente usa `mailto:` como fallback.

**Pasos para integrar emailJS:**

1. Crear cuenta en [emailjs.com](https://www.emailjs.com)
2. Configurar un servicio de email (Gmail, Outlook, custom SMTP)
3. Crear una plantilla de email
4. Obtener `PUBLIC_KEY`, `SERVICE_ID` y `TEMPLATE_ID`
5. Actualizar `Contact.tsx` para usar emailJS en lugar de `mailto:`

```tsx
// Ejemplo de integración (no implementado aún)
import emailjs from '@emailjs/browser';

emailjs.init('PUBLIC_KEY');

function handleSubmit(e) {
  e.preventDefault();
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    nombre,
    zona,
    tipo,
    mensaje,
  });
}
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Build para producción

```bash
npm run build
npm run preview  # Ver el build compilado localmente
```

Los archivos compilados se generan en `dist/`.

## Notas

- Las imágenes usan `ImagePlaceholder` — reemplazar con assets reales
- Estilos: verificar `index.css` para paleta de colores y tipografía
- WhatsApp: Número de contacto hardcodeado en `Contact.tsx` — actualizar según sea necesario
- Instagram: Handle `@plagasoutlp` — puede variar

## Autor

Desarrollado por **Victor Roberto Curzio**  
Portfolio: [curziovictorroberto.com](https://curziovictorroberto.com)  
Email: curziovictorroberto@gmail.com

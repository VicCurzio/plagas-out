# Changelog

Historial de cambios del sitio.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/);
las versiones siguen [SemVer](https://semver.org/lang/es/).

Se cierra una versión con `npm run release`.

## [Sin publicar]


## [0.2.0] - 2026-10-03

### Agregado

- Verificación automática antes de publicar: el linter, la regla de capas y el chequeo de tipos corren en cada push y en cada pull request, y el despliegue depende de que pasen.
- Chequeo de configuración al arrancar: si EmailJS queda configurado a medias, el sitio lo avisa en el momento en vez de mandar todas las consultas por correo del visitante sin que nadie se entere.
- Datos de contacto (WhatsApp, correo, Instagram) en un solo lugar, para que no queden desincronizados entre el botón flotante y la sección de contacto.
- El sitio ahora se puede encontrar y compartir: tarjeta con título y descripción al mandar el link por WhatsApp, sitemap y robots para los buscadores, y datos estructurados que declaran el negocio, el rubro y la zona (La Plata, Berisso, Ensenada).
- La tarjeta del link ahora lleva imagen: al pegar la dirección en WhatsApp, LinkedIn o Instagram se ve una placa con el nombre, la zona de cobertura y la habilitación, en lugar de solo texto. La placa se genera con `npm run og` desde una fuente versionada, así que retocarla es editar una línea y volver a correrlo, no rehacerla a ojo.

### Cambiado

- El código se reordenó por área: la pantalla, lo que es del negocio (contacto) y lo genérico quedaron separados, con una regla verificada que impide que se mezclen.
- El envío del formulario dejó de estar dentro de la pantalla: ahora es una función aparte que se puede leer y probar sola.

## [0.1.0] - 2026-08-14

### Agregado

- Sitio de presentación con secciones de servicios, galería, testimonios, por qué elegirnos, ofertas, cómo trabajamos y quiénes somos.
- Formulario de contacto que envía por correo, con apertura del cliente de correo del visitante como respaldo si el envío falla.
- Botón flotante de WhatsApp.
- Publicación automática en GitHub Pages.

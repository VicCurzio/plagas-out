/**
 * Configuracion leida del entorno, en un solo lugar y verificada al arrancar.
 *
 * Por que existe: `import.meta.env.LO_QUE_SEA` desparramado por los componentes
 * es indistinguible de un valor que existe. Si una variable falta, la pagina
 * arranca contenta y el problema aparece mucho despues, del lado del usuario.
 *
 * Aca las variables se leen una sola vez, se documentan y se verifican. La
 * verificacion tiene una particularidad de este proyecto: EmailJS es opcional a
 * proposito (sin el, el formulario cae a `mailto:` y la consulta no se pierde),
 * asi que faltar del todo es un modo de uso valido. Lo que NO es valido es
 * tenerlo a medias: dos de tres variables cargadas significa que alguien creyo
 * que el envio por correo estaba configurado y no lo esta.
 */

const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? '';
const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? '';
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? '';

const emailjsVars = {
    VITE_EMAILJS_PUBLIC_KEY: emailjsPublicKey,
    VITE_EMAILJS_SERVICE_ID: emailjsServiceId,
    VITE_EMAILJS_TEMPLATE_ID: emailjsTemplateId,
};

const faltantes = Object.entries(emailjsVars)
    .filter(([, valor]) => valor === '')
    .map(([nombre]) => nombre);

const emailjsCompleto = faltantes.length === 0;
const emailjsAMedias = faltantes.length > 0 && faltantes.length < 3;

if (emailjsAMedias) {
    const detalle =
        `EmailJS esta configurado a medias: falta ${faltantes.join(', ')}. ` +
        'El formulario va a caer a mailto: en todos los envios. ' +
        'Completa las tres variables en .env o sacalas todas.';

    // En desarrollo se corta el arranque: es el momento en que se puede
    // arreglar. En produccion solo se avisa, porque dejar la landing del
    // cliente en blanco por un problema de configuracion es peor que el
    // problema de configuracion.
    if (import.meta.env.DEV) throw new Error(detalle);
    console.error(detalle);
}

export const env = {
    /** Casilla que recibe las consultas y se muestra en la seccion de contacto. */
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'info@plagasout.com.ar',
    /** Credenciales de EmailJS. `null` = no configurado: el formulario usa mailto. */
    emailjs: emailjsCompleto
        ? { publicKey: emailjsPublicKey, serviceId: emailjsServiceId, templateId: emailjsTemplateId }
        : null,
} as const;

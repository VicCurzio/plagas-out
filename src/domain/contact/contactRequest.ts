import emailjs from '@emailjs/browser';
import { env } from '../../shared/config/env';
import { contactInfo } from './contactInfo';

/**
 * La regla del formulario de contacto, fuera del componente.
 *
 * Vive aca y no dentro del JSX por una razon concreta: es lo unico del sitio
 * que puede fallar y hacer perder un cliente. Separado se puede leer entero en
 * treinta lineas y se puede probar sin renderizar la pagina.
 *
 * La regla: nunca se pierde una consulta. Si EmailJS no esta configurado o el
 * envio falla, se abre el cliente de correo con los datos ya cargados.
 */

export const SERVICE_OPTIONS = [
    'Desinsectación General',
    'Desratización',
    'Control de Moscas',
    'Desinfección y Sanitización',
    'Control de Aves / Murciélagos',
    'Contrato Anual',
    'Servicio para actividad comercial',
    'Otro',
] as const;

export interface ContactRequest {
    nombre: string;
    zona: string;
    tipo: string;
    mensaje: string;
}

/** Como se envio finalmente la consulta. La pantalla muestra un texto distinto para cada caso. */
export type ContactChannel = 'emailjs' | 'mailto';

/** Funcion pura: el link de correo con la consulta precargada. */
export function mailtoUrl(req: ContactRequest): string {
    const asunto = encodeURIComponent(`Solicitud de presupuesto - ${req.nombre || 'Sin nombre'}`);
    const cuerpo = encodeURIComponent(
        `Nombre: ${req.nombre}\nZona/Barrio: ${req.zona}\nTipo de plaga/servicio: ${req.tipo}\nMensaje: ${req.mensaje}`
    );
    return `mailto:${contactInfo.email}?subject=${asunto}&body=${cuerpo}`;
}

let emailjsIniciado = false;

async function enviarPorEmailjs(req: ContactRequest): Promise<void> {
    if (!env.emailjs) throw new Error('EmailJS no configurado');

    if (!emailjsIniciado) {
        emailjs.init(env.emailjs.publicKey);
        emailjsIniciado = true;
    }

    await emailjs.send(env.emailjs.serviceId, env.emailjs.templateId, {
        nombre: req.nombre || 'Sin nombre',
        zona: req.zona,
        tipo: req.tipo,
        mensaje: req.mensaje,
        email: contactInfo.email,
    });
}

export async function sendContactRequest(req: ContactRequest): Promise<ContactChannel> {
    if (env.emailjs) {
        try {
            await enviarPorEmailjs(req);
            return 'emailjs';
        } catch (error) {
            console.error('EmailJS no pudo enviar la consulta, se abre el correo del visitante:', error);
        }
    }

    window.location.href = mailtoUrl(req);
    return 'mailto';
}

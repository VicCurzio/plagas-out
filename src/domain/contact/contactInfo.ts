import { env } from '../../shared/config/env';

/**
 * Los datos de contacto del negocio, en un solo lugar.
 *
 * Estaban repetidos entre el boton flotante de WhatsApp y la seccion de
 * contacto, que es la forma tipica de que un dia el telefono quede actualizado
 * en un lado y viejo en el otro.
 */
export const contactInfo = {
    /** Numero en formato internacional, sin signos: lo que espera wa.me. */
    whatsappNumero: '5492210000000',
    /** El mismo numero, escrito para leer. */
    whatsappVisible: '+54 221 000-0000',
    instagram: '@plagasoutlp',
    instagramUrl: 'https://instagram.com/plagasoutlp',
    email: env.contactEmail,
} as const;

export function whatsappUrl(mensaje: string): string {
    return `https://wa.me/${contactInfo.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

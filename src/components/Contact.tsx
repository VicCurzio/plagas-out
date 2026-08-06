import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_OPTIONS = [
  'Desinsectación General',
  'Desratización',
  'Control de Moscas',
  'Desinfección y Sanitización',
  'Control de Aves / Murciélagos',
  'Contrato Anual',
  'Servicio para actividad comercial',
  'Otro',
];

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@plagasout.com.ar';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [zona, setZona] = useState('');
  const [tipo, setTipo] = useState(SERVICE_OPTIONS[0]);
  const [mensaje, setMensaje] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setError('Configuración de email no disponible. Intenta más tarde.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        nombre: nombre || 'Sin nombre',
        zona,
        tipo,
        mensaje,
        email: CONTACT_EMAIL,
      });

      setSent(true);
      setNombre('');
      setZona('');
      setTipo(SERVICE_OPTIONS[0]);
      setMensaje('');

      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error('Error enviando email:', err);
      setError('No pudimos enviar tu solicitud. Intenta de nuevo o contactanos por WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <div className="eyebrow eyebrow-on-dark">CONTACTO</div>
          <h2 className="section-heading text-white">
            Contacto / <span className="text-orange-italic">WhatsApp</span>
          </h2>
          <p className="section-lead lead-on-dark contact-lead">
            Coordinación inmediata por WhatsApp o completá el formulario. Respuesta sin compromiso en menos de 24
            horas.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.6a8.4 8.4 0 0 1-12.2 7.5L4 20l1-4.7a8.4 8.4 0 1 1 16-3.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="contact-method-label">WHATSAPP</div>
                <div className="contact-method-value">+54 221 000-0000</div>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="contact-method-label">EMAIL TÉCNICO</div>
                <div className="contact-method-value">{CONTACT_EMAIL}</div>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="13.5" r="3.3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 7l1.3-2h5.4L16 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="contact-method-label">INSTAGRAM</div>
                <div className="contact-method-value">@plagasoutlp</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field contact-field-grow">
                <label className="contact-label">NOMBRE COMPLETO</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="contact-input"
                />
              </div>
              <div className="contact-field contact-field-small">
                <label className="contact-label">ZONA / BARRIO</label>
                <input
                  type="text"
                  value={zona}
                  onChange={(e) => setZona(e.target.value)}
                  placeholder="Ej: City Bell"
                  className="contact-input"
                />
              </div>
            </div>
            <div className="contact-field">
              <label className="contact-label">TIPO DE PLAGA / SERVICIO</label>
              <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="contact-input">
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="contact-field">
              <label className="contact-label">MENSAJE O DETALLES</label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Contanos brevemente tu necesidad..."
                rows={4}
                className="contact-input contact-textarea"
              />
            </div>
            <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
            {sent && (
              <div className="contact-sent">
                Solicitud enviada correctamente. Nos contactaremos en menos de 24 horas.
              </div>
            )}
            {error && (
              <div className="contact-error">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

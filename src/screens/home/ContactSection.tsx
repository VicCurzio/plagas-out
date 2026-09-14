import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  SERVICE_OPTIONS,
  sendContactRequest,
  type ContactChannel,
} from '../../domain/contact/contactRequest';
import { contactInfo } from '../../domain/contact/contactInfo';

export default function ContactSection() {
  const [nombre, setNombre] = useState('');
  const [zona, setZona] = useState('');
  const [tipo, setTipo] = useState<string>(SERVICE_OPTIONS[0]);
  const [mensaje, setMensaje] = useState('');
  const [sentVia, setSentVia] = useState<ContactChannel | null>(null);
  const [loading, setLoading] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function avisarPor(canal: ContactChannel) {
    setSentVia(canal);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setSentVia(null), 6000);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const canal = await sendContactRequest({ nombre, zona, tipo, mensaje });

    if (canal === 'emailjs') {
      setNombre('');
      setZona('');
      setTipo(SERVICE_OPTIONS[0]);
      setMensaje('');
    }

    avisarPor(canal);
    setLoading(false);
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
                <div className="contact-method-value">{contactInfo.whatsappVisible}</div>
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
                <div className="contact-method-value">{contactInfo.email}</div>
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
                <div className="contact-method-value">{contactInfo.instagram}</div>
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
            {sentVia === 'emailjs' && (
              <div className="contact-sent">
                Solicitud enviada correctamente. Nos contactaremos en menos de 24 horas.
              </div>
            )}
            {sentVia === 'mailto' && (
              <div className="contact-sent">
                Se abrió tu correo con la solicitud precargada. Si no se abrió, escribinos por WhatsApp.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

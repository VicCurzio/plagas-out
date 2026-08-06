import Reveal from './Reveal';
import ImagePlaceholder from './ImagePlaceholder';

const VALUES = [
  {
    title: 'Profesionalismo Real',
    text: 'Método y precisión, no improvisación. Cada intervención es técnicamente exacta.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3.5l7 2.8v5.4c0 5-3 7.9-7 9-4-1.1-7-4-7-9V6.3l7-2.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12.2l2.1 2.1L15.3 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Claridad y Transparencia',
    text: 'Explicamos todo lo que hacemos. Comunicación clara en cada paso del proceso.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="12" r="1.6" fill="currentColor" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        <circle cx="18" cy="12" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Servicio Responsable',
    text: 'Seguro para personas y mascotas. Productos aprobados por ANMAT en todos los tratamientos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="12" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <rect x="9" y="2.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container about-inner">
        <Reveal as="div" variant="slide-right" className="about-media">
          <div className="about-photo-frame">
            <ImagePlaceholder label="Foto: local o equipo PlagasOut" className="about-photo" />
          </div>
          <div className="about-local-badge">
            <span className="about-local-badge-title">LOCAL</span>
            <span className="about-local-badge-sub">REGIÓN CAPITAL</span>
          </div>
          <div className="about-coverage-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="about-coverage-icon">
              <path d="M12 21s7-7.4 7-12.4A7 7 0 0 0 5 8.6C5 13.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <circle cx="12" cy="8.6" r="2.3" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            <div>
              <div className="about-coverage-label">ZONA DE COBERTURA</div>
              <div className="about-coverage-value">La Plata, Berisso y Ensenada</div>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" variant="slide-right" className="about-copy">
          <div className="eyebrow">QUIÉNES SOMOS</div>
          <h2 className="section-heading">Un modelo simple y transparente</h2>
          <p className="about-lead">
            Somos una empresa de control de plagas urbanas con base en La Plata. Trabajamos con diagnóstico
            responsable, aplicación segura y constancia oficial en cada visita.
          </p>
          <div className="values-list">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} as="div" variant="fade-up" delay={i * 0.1} className="value-row">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-text">{v.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="about-cta">
            <div>
              <div className="about-cta-title">¿Listo para eliminar plagas?</div>
              <div className="about-cta-sub">Solicitá tu presupuesto sin compromiso.</div>
            </div>
            <a href="#contacto" className="btn btn-primary about-cta-btn">
              Solicitar Presupuesto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

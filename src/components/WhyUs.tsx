import Reveal from './Reveal';

const FEATURES = [
  {
    title: 'Servicio Habilitado',
    text: 'Cumplimos con la Ley 10.699 de la Provincia de Buenos Aires. Profesionalismo y respaldo oficial en cada intervención.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3.5l7 2.8v5.4c0 5-3 7.9-7 9-4-1.1-7-4-7-9V6.3l7-2.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12.2l2.1 2.1L15.3 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Tratamientos Seguros',
    text: 'Aplicaciones precisas con productos de baja toxicidad aprobados por ANMAT. Protegemos hogares, comercios y espacios de trabajo.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c3 4 6.5 8 6.5 11.6A6.5 6.5 0 0 1 5.5 14.6C5.5 11 9 7 12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Constancia Oficial',
    text: 'Certificados válidos para habilitaciones municipales, consorcios e inspecciones de salud. Documentación completa siempre.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="5.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 13.5L7.5 20l4.5-2.4L16.5 20 15 13.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Atención Directa',
    text: 'Coordinación inmediata por WhatsApp, sin intermediarios. Contacto directo y respuesta rápida a tus necesidades.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.6a8.4 8.4 0 0 1-12.2 7.5L4 20l1-4.7a8.4 8.4 0 1 1 16-3.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">POR QUÉ ELEGIRNOS</div>
          <h2 className="section-heading">Responsabilidad técnica en cada intervención</h2>
          <p className="section-lead">
            Nos diferenciamos por el compromiso con la salud y la transparencia en el proceso, de punta a punta.
          </p>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} as="div" variant="card-bounce" delay={i * 0.1} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-text">{f.text}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

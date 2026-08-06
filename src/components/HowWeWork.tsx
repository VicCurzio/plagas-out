import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico del Lugar',
    text: 'Evaluación precisa para identificar el tipo de plaga, nivel de infestación y áreas de riesgo.',
  },
  {
    n: '02',
    title: 'Aplicación Profesional',
    text: 'Tratamiento dirigido con productos certificados y técnicas especializadas aprobadas por ANMAT.',
  },
  {
    n: '03',
    title: 'Constancia + Recomendaciones',
    text: 'Documentación oficial y guía de cuidados post-servicio para resultados duraderos.',
  },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work">
      <div className="container-narrow">
        <Reveal as="div" variant="fade-up" className="section-intro">
          <div className="eyebrow">CÓMO TRABAJAMOS</div>
          <h2 className="section-heading">Tres pasos, sin vueltas</h2>
          <p className="section-lead">Una intervención profesional y efectiva, de principio a fin.</p>
        </Reveal>

        <div className="steps-row">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} as="div" variant="fade-up" delay={i * 0.1} className="step">
              <div className="step-number">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-text">{s.text}</div>
            </Reveal>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-banner-title">¿Plagas en tu hogar o comercio?</div>
          <div className="cta-banner-text">
            No esperes a que el problema crezca. Solicitá hoy mismo tu diagnóstico técnico sin cargo por WhatsApp.
            Respuesta en menos de 24 horas.
          </div>
          <a href="#contacto" className="btn btn-primary cta-banner-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
              <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Agendar Visita Técnica
          </a>
        </div>
      </div>
    </section>
  );
}

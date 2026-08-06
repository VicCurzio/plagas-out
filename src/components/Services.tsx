import Reveal from './Reveal';

const SERVICES = [
  {
    title: 'Desinsectación',
    text: 'Cucarachas, hormigas, chinches, alacranes, arañas, pulgas, mosquitos.',
    methods: 'Métodos: aspersión dirigida, geles, cebos, nebulización.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 7.5V5M9 6l-1.5-1.7M15 6l1.5-1.7M6 11l-2.5-1M6 15l-2.5 1M18 11l2.5-1M18 15l2.5 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Desratización',
    text: 'Ratas y lauchas, con planes de control y prevención sostenidos.',
    methods: 'Métodos: cebos, trampas, sellado de accesos, plan preventivo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Control de Moscas',
    text: 'Fumígenos, cebos visuales, trampas e IGR para interiores y exteriores.',
    methods: 'Métodos especializados para espacios cerrados y abiertos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Desinfección y Sanitización',
    text: 'Eliminación de virus y bacterias en espacios cerrados.',
    methods: 'Sanitización ambiental en oficinas, comercios e instituciones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c3 4 6.5 8 6.5 11.6A6.5 6.5 0 0 1 5.5 14.6C5.5 11 9 7 12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow eyebrow-on-dark">SERVICIOS PROFESIONALES</div>
          <h2 className="section-heading text-white">Soluciones para cada tipo de plaga</h2>
          <p className="section-lead lead-on-dark services-lead">
            Métodos certificados y productos aprobados por ANMAT para el control de plagas urbanas.
          </p>
          <a href="#contacto" className="btn btn-primary services-cta">
            Solicitar Servicio
          </a>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} as="div" variant="card-bounce" delay={i * 0.1} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-text">{s.text}</div>
              <div className="service-methods">{s.methods}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

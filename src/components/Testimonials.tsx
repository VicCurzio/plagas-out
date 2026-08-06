import Reveal from './Reveal';

const STAR = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17l-5.9 3.4 1.3-6.6-4.9-4.5 6.6-.7L12 2.5Z" />
  </svg>
);

const TESTIMONIALS = [
  {
    quote:
      '"Vinieron al otro día de escribirles por WhatsApp. Muy prolijos y nos dejaron la constancia para el consorcio."',
    name: 'Marina L.',
    place: 'Consorcio en City Bell',
  },
  {
    quote: '"Como encargado de un local gastronómico necesitaba el certificado para la inspección. Todo en tiempo y forma."',
    name: 'Diego R.',
    place: 'Gastronomía, La Plata',
  },
  {
    quote: '"Detectaron el nido de ratas en el depósito y solucionaron todo en una sola visita."',
    name: 'Patricia G.',
    place: 'Depósito en Ensenada',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">TESTIMONIOS</div>
          <h2 className="section-heading">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} as="div" variant="card-bounce" delay={i * 0.1} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s}>{STAR}</span>
                ))}
              </div>
              <div className="testimonial-quote">{t.quote}</div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-place">{t.place}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

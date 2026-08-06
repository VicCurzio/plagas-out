import Reveal from './Reveal';

const ACTIVITIES = [
  'Viviendas y Consorcios',
  'Gastronomía & Fábricas de Alimentos',
  'Comercios, Supermercados & Shoppings',
  'Instituciones Educativas & Jardines',
  'Depósitos, Logística & Aduanas',
  'Industrias, Talleres & Plantas',
  'Clínicas, Geriátricos & Centros de Salud',
];

const EXTRAS = [
  { title: 'Control de Aves', text: 'Sistemas de redes y púas no letales.' },
  { title: 'Murciélagos', text: 'Exclusión profesional y remediación.' },
  { title: 'Contratos Anuales', text: 'Monitoreo preventivo y auditorías.' },
  { title: 'Urgencias 24h', text: 'Respuesta inmediata ante incidencias.' },
];

export default function Specials() {
  return (
    <section id="especiales" className="specials">
      <div className="container specials-inner">
        <Reveal as="div" variant="slide-left" className="specials-copy">
          <div className="eyebrow">SERVICIOS ESPECIALES</div>
          <h2 className="section-heading">
            Protocolos por <span className="text-orange-italic">actividad</span>
          </h2>
          <p className="section-lead specials-lead">
            Soluciones específicas según el tipo de actividad. Diseñamos protocolos adaptados a cada sector.
          </p>
          <div className="activity-list">
            {ACTIVITIES.map((a) => (
              <div key={a} className="activity-item">
                <span className="activity-dot" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" variant="slide-right" className="extras-card">
          <div className="extras-title">Tratamientos Extra</div>
          <div className="extras-grid">
            {EXTRAS.map((e) => (
              <div key={e.title}>
                <div className="extras-item-title">{e.title}</div>
                <div className="extras-item-text">{e.text}</div>
              </div>
            ))}
          </div>
          <div className="extras-quote-wrap">
            <div className="extras-quote">
              &quot;Emitimos certificados oficiales para habilitaciones municipales y auditorías ISO/HACCP.&quot;
            </div>
          </div>
          <a href="#contacto" className="btn btn-primary extras-cta">
            Consultar Plan para mi Actividad
          </a>
        </Reveal>
      </div>
    </section>
  );
}

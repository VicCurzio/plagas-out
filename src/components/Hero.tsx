import ImagePlaceholder from './ImagePlaceholder';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="badge">
            <span className="badge-dot" />
            HABILITACIÓN OFICIAL · LEY 10.699
          </div>
          <h1 className="hero-title">
            Plagas<span className="text-orange">Out</span>
            <br />
            <span className="hero-subtitle">Control Urbano</span>
          </h1>
          <p className="hero-lead">
            Fumigación profesional y sanitaria en{' '}
            <strong className="text-ink">La Plata, Berisso y Ensenada</strong>. Aplicador habilitado, productos
            aprobados por ANMAT y constancia oficial en cada intervención.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary hero-btn">
              Solicitar Presupuesto
            </a>
            <a href="#servicios" className="btn btn-outline hero-btn-outline">
              Ver Servicios
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-value text-orange">24h</div>
              <div className="hero-stat-label">Respuesta rápida</div>
            </div>
            <div className="hero-stat-divider">
              <div className="hero-stat-value">+15</div>
              <div className="hero-stat-label">Años de experiencia</div>
            </div>
            <div className="hero-stat-divider">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Garantía sanitaria</div>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-frame">
            <ImagePlaceholder label="Foto: equipo trabajando en campo" className="hero-photo" />
            <div className="hero-photo-gradient" />
            <div className="hero-photo-overlay">
              <div className="hero-photo-overlay-title">Garantía Sanitaria</div>
              <div className="hero-photo-overlay-sub">CONSTANCIA OFICIAL</div>
              <div className="hero-photo-chips">
                <div className="hero-photo-chip">
                  <div className="hero-photo-chip-title">Buenos Aires</div>
                  <div className="hero-photo-chip-sub">Provincia</div>
                </div>
                <div className="hero-photo-chip">
                  <div className="hero-photo-chip-title">La Plata</div>
                  <div className="hero-photo-chip-sub">Sede central</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-safe-badge">
            <div className="hero-safe-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5 5L20 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="hero-safe-title">100% Seguro</div>
              <div className="hero-safe-sub">Personas &amp; mascotas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

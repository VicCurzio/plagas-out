export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div>
            <div className="footer-brand">
              <div className="footer-brand-mark">P</div>
              <div className="footer-brand-name">
                <span>
                  Plagas<span className="text-orange">-Out</span>
                </span>
                <div className="footer-brand-sub">CONTROL URBANO</div>
              </div>
            </div>
            <div className="footer-desc">
              Líderes en servicios sanitarios y control de plagas en la Región Capital. Profesionalismo, seguridad y
              compromiso ambiental.
            </div>
          </div>
          <div>
            <div className="footer-heading">NAVEGACIÓN</div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Inicio
              </a>
              <a href="#servicios" className="footer-link">
                Servicios
              </a>
              <a href="#especiales" className="footer-link">
                Especiales
              </a>
              <a href="#nosotros" className="footer-link">
                Nosotros
              </a>
              <a href="#testimonios" className="footer-link">
                Testimonios
              </a>
            </div>
          </div>
          <div>
            <div className="footer-heading">LEGAL &amp; TÉCNICO</div>
            <div className="footer-legal">
              <div>Empresa Habilitada</div>
              <div>Ley Prov. 10.699</div>
              <div>Reg. Sanitario ANMAT</div>
              <div>Certificación Oficial</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} PlagasOut Control Urbano · La Plata</div>
          <div className="footer-credit">
            <span>
              Creado por{' '}
              <a href="https://www.linkedin.com/in/victor-roberto-curzio/" target="_blank" rel="noopener" className="credit-link">
                Victor Roberto Curzio
              </a>
            </span>
            <span>·</span>
            <a href="https://viccurzio.github.io/portfolio/" target="_blank" rel="noopener" className="credit-link">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

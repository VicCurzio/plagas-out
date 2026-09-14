export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">P</div>
        <div className="brand-name">
          <span>
            Plagas<span className="text-orange">Out</span>
          </span>
          <span className="brand-sub">CONTROL URBANO</span>
        </div>
      </div>
      <nav>
        <a href="#servicios" className="nav-link">
          Servicios
        </a>
        <a href="#especiales" className="nav-link">
          Especiales
        </a>
        <a href="#nosotros" className="nav-link">
          Nosotros
        </a>
        <a href="#testimonios" className="nav-link">
          Testimonios
        </a>
      </nav>
      <a href="#contacto" className="btn btn-primary header-cta">
        Presupuesto
      </a>
    </header>
  );
}

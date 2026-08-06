import Reveal from './Reveal';
import ImagePlaceholder from './ImagePlaceholder';

const ITEMS = [
  { id: 'gallery-1', title: 'Desratización', place: 'Depósito comercial, La Plata' },
  { id: 'gallery-2', title: 'Desinsectación', place: 'Cocina industrial, Berisso' },
  { id: 'gallery-3', title: 'Control de Aves', place: 'Balcón residencial, Ensenada' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">RESULTADOS</div>
          <h2 className="section-heading">Resultados que se ven</h2>
          <p className="section-lead">Intervenciones reales en hogares y comercios de la región.</p>
        </div>
        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <Reveal key={item.id} as="div" variant="fade-up" delay={i * 0.1}>
              <div className="gallery-pair">
                <div className="gallery-pane">
                  <ImagePlaceholder label="Antes" className="gallery-img" />
                  <span className="gallery-tag gallery-tag-before">ANTES</span>
                </div>
                <div className="gallery-pane">
                  <ImagePlaceholder label="Después" className="gallery-img" />
                  <span className="gallery-tag gallery-tag-after">DESPUÉS</span>
                </div>
              </div>
              <div className="gallery-title">{item.title}</div>
              <div className="gallery-place">{item.place}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

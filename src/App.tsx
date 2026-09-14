import Home from './screens/home/Home';

// Un solo sitio de una sola pantalla: App solo monta la screen. Cuando aparezca
// una segunda ruta, el enrutador va aca y nada mas cambia de lugar.
export default function App() {
  return <Home />;
}

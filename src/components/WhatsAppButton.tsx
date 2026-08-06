export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492210000000?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20fumigaci%C3%B3n"
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      className="whatsapp-fab"
    >
      <svg width="52" height="52" viewBox="0 0 24 24">
        <path fill="var(--green)" d="M12 2.5A9.5 9.5 0 0 0 3.6 16.9L2.5 21.5l4.7-1.2A9.5 9.5 0 1 0 12 2.5Z" />
        <path
          fill="white"
          d="M17.5 15.9c-.2.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.3.4-.5.6-.2.2-.4.4-.2.7.2.4 1 1.5 2.1 2.4 1.4 1.2 2.1 1.4 2.4 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 .9.3.1.5.2.6.3.1.2.1.7-.1 1.4Z"
        />
      </svg>
    </a>
  );
}

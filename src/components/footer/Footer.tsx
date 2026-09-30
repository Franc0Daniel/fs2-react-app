const Footer = () => {
  return (
    /* AQUÍ ESTÁ LA MAGIA: Cambiamos "footer" por "footer-ari" */
    <footer className="footer-ari">
      <p>
        Síguenos en Instagram:{' '}
        <a
          href="https://www.instagram.com/aripapeleria_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @aripapeleria_
        </a>
      </p>

      <p>
        Teléfono:{' '}
        <a href="tel:+56964798741">
          +56 9 6479 8741
        </a>
      </p>

      <p>
        © 2026 AriPapelería. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
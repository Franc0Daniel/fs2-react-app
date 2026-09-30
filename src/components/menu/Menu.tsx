import { Link } from "wouter";

const Menu = () => {
  return (
    <header className="encabezado-ari">
      <div className="logo-container">
        {/* Usamos Link para volver al inicio al hacer clic en el logo */}
        <Link href="/">
          <img
            src="/assets/imgs/milogo.png"
            alt="Logo de AriPapelería"
            className="logo-ari"
          />
        </Link>
      </div>

      <nav className="menu-principal" aria-label="Navegación principal">
        {/* Este cambia de página, usa Link */}
        <Link href="/">Inicio</Link>

        {/* ANCLAS: Solo con el #, sin la barrita / */}
        <a href="#packaging">Packaging</a>
        <a href="#planners">Planners</a>
        <a href="#contacto">Contacto</a>

        {/* Estos cambian de página, usan Link */}
        <Link href="/login">Iniciar sesión</Link>
        <Link href="/register">Registrarse</Link>

        <button type="button" className="boton-carrito">
          🛒 Carrito
        </button>
      </nav>
    </header>
  );
};

export default Menu;
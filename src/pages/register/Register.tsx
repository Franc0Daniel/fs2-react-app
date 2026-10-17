import { useAuth } from "react-oidc-context";

const Register = () => {
  const auth = useAuth();

  if (auth.isLoading) return <p>Cargando...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;

  return (
    <main>
      <section className="contenedor-formulario" aria-labelledby="titulo-registro">
        <article className="formulario-card">
          <h1 id="titulo-registro">Crear cuenta 💗</h1>

          {auth.isAuthenticated ? (
            <p className="formulario-descripcion">
              Ya tienes sesión iniciada como {auth.user?.profile.email}.
            </p>
          ) : (
            <>
              <p className="formulario-descripcion">
                Regístrate en AriPapelería para disfrutar de nuestros productos y
                novedades.
              </p>
              <p className="mensaje-ayuda">
                Te llevaremos a una pantalla segura para crear tu cuenta con tu
                correo electrónico. Te enviaremos un código de verificación.
              </p>
              <button
                type="button"
                className="boton-formulario"
                onClick={() => auth.signinRedirect()}
              >
                Crear cuenta
              </button>
            </>
          )}

          <p className="enlace-login">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
          </p>

          <p className="enlace-inicio">
            <a href="/">← Volver al inicio</a>
          </p>
        </article>
      </section>

      <a
        href="https://wa.me/56964798741"
        className="whatsapp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </a>
    </main>
  );
};

export default Register;
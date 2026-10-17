import { useAuth } from "react-oidc-context";

const Login = () => {
  const auth = useAuth();

  const cerrarSesion = () => {
    const clientId = "3vlbsrblbgrf9ig1uh6r8vhgbe";
    const logoutUri = window.location.origin;
    const cognitoDomain = "PEGA_AQUI_TU_DOMINIO_DE_COGNITO";
    auth.removeUser();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) return <p>Cargando...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;

  return (
    <main>
      <section className="contenedor-formulario" aria-labelledby="titulo-login">
        <article className="formulario-card">
          <h1 id="titulo-login">Bienvenido 💗</h1>

          {auth.isAuthenticated ? (
            <>
              <p className="formulario-descripcion">
                Hola, {auth.user?.profile.email}
              </p>
              <button
                type="button"
                className="boton-formulario"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <p className="formulario-descripcion">
                Inicia sesión en tu cuenta de AriPapelería.
              </p>
              <button
                type="button"
                className="boton-formulario"
                onClick={() => auth.signinRedirect()}
              >
                Iniciar sesión
              </button>
            </>
          )}

          <p className="enlace-login">
            ¿No tienes una cuenta? <a href="/register">Crea una aquí</a>
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

export default Login;
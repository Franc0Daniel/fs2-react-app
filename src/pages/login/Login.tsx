const Login = () => {
  return (
    <main>
      <section className="contenedor-formulario" aria-labelledby="titulo-login">
        <article className="formulario-card">
          <h1 id="titulo-login">Bienvenido 💗</h1>
          <p className="formulario-descripcion">
            Inicia sesión en tu cuenta de AriPapelería.
          </p>

          <form id="loginForm" noValidate>
            <div className="campo-formulario">
              <label htmlFor="loginEmail">Correo electrónico</label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                autoComplete="email"
                placeholder="ejemplo@correo.com"
                required
              />
              <small id="loginEmailError" className="mensaje-error"></small>
            </div>

            <div className="campo-formulario">
              <label htmlFor="loginPassword">Contraseña</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                autoComplete="current-password"
                placeholder="Ingresa tu contraseña"
                required
              />
              <small id="loginPasswordError" className="mensaje-error"></small>
            </div>

            <div className="campo-checkbox">
              <input type="checkbox" id="recordar" name="recordar" />
              <label htmlFor="recordar">Recordarme en este dispositivo</label>
            </div>

            <button type="submit" className="boton-formulario">
              Iniciar sesión
            </button>

            <p id="mensajeLogin" className="mensaje-registro" aria-live="polite"></p>
          </form>

          <p className="enlace-login">
            ¿No tienes una cuenta? <a href="register.html">Crea una aquí</a>
          </p>

          <p className="enlace-inicio">
            <a href="index.html">← Volver al inicio</a>
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
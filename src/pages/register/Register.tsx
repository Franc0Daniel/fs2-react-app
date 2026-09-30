const Register = () => {
  return (
    <main>
      <section className="contenedor-formulario" aria-labelledby="titulo-registro">
        <article className="formulario-card">
          <h1 id="titulo-registro">Crear cuenta 💗</h1>
          <p className="formulario-descripcion">
            Regístrate en AriPapelería para disfrutar de nuestros productos y novedades.
          </p>

          <form id="registerForm" noValidate>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                autoComplete="name"
                placeholder="Ingresa tu nombre completo"
                required
              />
              <small id="nombreError" className="mensaje-error"></small>
            </div>

            <div className="campo-formulario">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="ejemplo@correo.com"
                required
              />
              <small id="emailError" className="mensaje-error"></small>
            </div>

            <div className="campo-formulario">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                autoComplete="tel"
                placeholder="+56 9 1234 5678"
                required
              />
              <small id="telefonoError" className="mensaje-error"></small>
            </div>

            <div className="campo-formulario">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Crea una contraseña"
                required
              />
              <small className="mensaje-ayuda">
                Usa al menos 8 caracteres, incluyendo una mayúscula y un número.
              </small>
              <small id="passwordError" className="mensaje-error"></small>
            </div>

            <div className="campo-formulario">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                placeholder="Repite tu contraseña"
                required
              />
              <small id="confirmPasswordError" className="mensaje-error"></small>
            </div>

            <div className="campo-checkbox">
              <input type="checkbox" id="terminos" name="terminos" required />
              <label htmlFor="terminos">Acepto los términos y condiciones.</label>
            </div>
            <small id="terminosError" className="mensaje-error"></small>

            <div className="campo-checkbox newsletter">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">
                Quiero suscribirme al newsletter de AriPapelería para recibir novedades,
                promociones y nuevos productos.
              </label>
            </div>

            <button type="submit" className="boton-formulario">
              Crear cuenta
            </button>

            <p id="mensajeRegistro" className="mensaje-registro" aria-live="polite"></p>
          </form>

          <p className="enlace-login">
            ¿Ya tienes una cuenta? <a href="login.html">Inicia sesión aquí</a>
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
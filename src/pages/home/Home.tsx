// Definimos el "molde" (el tipo) para las imágenes del mosaico, tal como el profe hizo con GameCard
type ImagenMosaico = {
  src: string;
  alt: string;
};

// Creamos la lista de datos, igual que gameCards
const imagenesMosaico: ImagenMosaico[] = [
  {
    src: "img/imagen1.jpeg",
    alt: "Productos personalizados de AriPapelería",
  },
  {
    src: "img/imagen2.jpeg",
    alt: "Papelería personalizada",
  },
  {
    src: "img/imagen3.jpeg",
    alt: "Diseños de AriPapelería",
  },
  {
    src: "img/imagen4.jpeg",
    alt: "Productos de papelería para emprendimientos",
  },
];

const Home = () => {
  return (
    <>
      <main>
        <section className="contenedor-principal" aria-labelledby="titulo-principal">
          
          <div className="mosaico">
            {/* Usamos el .map() tal cual lo aplicó el profe para renderizar los artículos */}
            {imagenesMosaico.map((item, index) => {
              return (
                <article key={index}>
                  <img src={item.src} alt={item.alt} />
                </article>
              );
            })}
          </div>

          <article className="texto-new">
            <h1 id="titulo-principal">Personaliza tu pyme 💗</h1>

            <p className="descripcion-ari">
              Dale un toque único a tu emprendimiento con nuestros
              productos de papelería y packaging personalizados.
              Diseñamos cada detalle pensando en tu marca.
            </p>

            {/* Enlaces normales usando etiquetas <a>, al estilo del profe */}
            <a href="#packaging" className="mi-boton">
              {" "}
              Compra aquí{" "}
            </a>
          </article>
        </section>

        <section id="packaging" className="seccion-contenido" aria-labelledby="titulo-packaging">
          <article>
            <h2 id="titulo-packaging">Packaging personalizado 💗</h2>

            <p>
              Encuentra etiquetas, stickers, tarjetas y otros
              productos personalizados para darle una identidad
              especial a tu emprendimiento.
            </p>
          </article>
        </section>

        <section id="planners" className="seccion-contenido" aria-labelledby="titulo-planners">
          <article>
            <h2 id="titulo-planners">Planners y papelería</h2>

            <p>
              Organiza tus días con nuestros planners y productos
              de papelería diseñados para combinar funcionalidad
              y estilo.
            </p>
          </article>
        </section>

        <section id="contacto" className="seccion-contenido" aria-labelledby="titulo-contacto">
          <article>
            <h2 id="titulo-contacto">Contáctanos 💌</h2>

            <p>
              ¿Tienes una idea para personalizar tu emprendimiento?
              Escríbenos y conversemos sobre tu proyecto.
            </p>
            <br />
            <p>
              Instagram:
              <a href="https://www.instagram.com/aripapeleria_/" target="_blank" rel="noopener noreferrer">
                {" "}
                @aripapeleria_{" "}
              </a>
            </p>
            <p>
              Teléfono:
              <a href="tel:+56964798741">
                {" "}
                +56 9 6479 8741{" "}
              </a>
            </p>
          </article>
        </section>
      </main>

      <a
        href="https://wa.me/56964798741"
        className="whatsapp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con AriPapelería por WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default Home;
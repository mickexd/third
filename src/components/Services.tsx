import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Services = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title  */}
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Realidad virtual y aumentada
        </h2>
        {/* grid  */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item  */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Realidad Virtual</h4>
              <p>
                Adaptamos tu proyecto a realidad virtual arquitectónica que
                permite visualizar y experimentar espacios y objetosde manera
                interactiva, en tiempo real y desde cualquier lugar. Esto
                permite vivir la experiencia del lugar si necesidad de pisar un
                showroom fisico y sin tener que salir de casa.
              </p>
            </div>
          </div>
          {/* item  */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Realidad Aumentada</h4>
              <p>
                Ofrecemos la realidad aumentada arquitectónica como un servicio
                que permite visualizar y experimentar espacios y objetos en 3D
                de manera interactiva, en tiempo real y en el lugar exacto donde
                se van a construir. Permite a nuestros clientes experimentar y
                personalizar sus proyectos de manera precisa y segura,
                reduciendo errores y costos.
              </p>
            </div>
          </div>
          {/* item  */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Maquetas Virtuales</h4>
              <p>
                Desarrollamos maquetas virtuales, para que puedas visualizar tu
                proyecto de manera interactiva y en tiempo real, además tambien
                podemos hacer que sean accedidas desde la web, para que puedas
                compartirlas con tus clientes y socios.
              </p>
            </div>
          </div>
          {/* item  */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">
                Software a la medida
              </h4>
              <p>
                Desarrollamos software personalizado para tu empresa, con el fin
                de mejorar tus procesos y automatizar tareas y mejorar tu
                presencia web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

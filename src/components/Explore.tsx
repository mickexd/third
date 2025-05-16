import Play3D from "../assets/img/play3d.svg";
import { useState } from "react";

const Explore = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="explore-section" className="min-h-[400px] mb-16 lg:mb-4">
      <div className="container mx-auto h-full">
        <div className="h-full bg-[url('/src/assets/img/explore.png')] bg-no-repeat bg-cover p-6 sm:p-10 md:p-14 flex flex-col items-start justify-center">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 max-w-[600px]"
            data-aos="fade-right"
            data-aos-offset="1000"
          >
            Explora tu producto de nuevas maneras
          </h3>

          <div
            className="w-full max-w-[500px] aspect-video bg-[url('https://www.shapespark.com/v221/img/portfolio/loft_apartment_by_motionwave.jpg')] bg-no-repeat bg-cover rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                src={Play3D}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt="Botón para explorar en 3D"
              />
            </button>
          </div>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative bg-black rounded-lg shadow-xl w-full max-w-6xl aspect-video">
                <button
                  onClick={() => setIsOpen(false)}
                  className="relative top-0 right-0 text-white bg-red-500 hover:bg-red-700 rounded-full p-2 text-2xl h-16 w-16 flex items-center justify-center"
                  aria-label="Cerrar modal"
                >
                  &times;
                </button>
                <iframe
                  className="w-full h-full rounded-b-lg"
                  src="https://showcase.shapespark.com/loft_apartment_by_motionwave#autoplay&help"
                  title="Architectural Visualization"
                  allow="gyroscope; accelerometer; xr-spatial-tracking; vr;"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Explore;

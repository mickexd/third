import Users from "./Users";
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Explora <br /> tu proyecto en realidad virtual.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolar sit amet consectetur adipisicing elit. Iste
              doloribus inventore harum cumque blanditiis minima.
            </p>
            {/* btns */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn h-14 w-34 bg-gradient-to-l from-[#a944e7] to-[#f80063]  rounded-md hover:from-[#f80063] hover:to-[#a944e7]">
                Más información
              </button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#explore-section"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("explore-section");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Explora con tu dispositivo VR o PC
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

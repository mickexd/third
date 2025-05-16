import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
// import animate on scroll (aos)
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg-flex bg-black text-white">
      <Header setNavMobile={setNavMobile} />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "right-full"
        } fixed top-0 bottom-0 w-48 transition-all duration-300 ease-in-out z-50`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Banner />

      <Experience />
      <Video />
      <Services />
      <Testimonial />
      <section id="explore-section">
        <Explore />
      </section>

      <Footer />
    </div>
  );
};

export default App;

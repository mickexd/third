// import icons
import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            Vive la experiencia de recorrer tu proyecto antes de que exista
          </h3>
          {/* Video Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-black p-2 rounded-lg shadow-xl relative w-full max-w-3xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-2 -right-2 m-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-1 text-xl leading-none"
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/g3iiFQzfU8w?autoplay=1&si=6pl1mGoUPw7TC23x" // YouTube embed URL
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
          {/* video thumbnail */}
          <div
            className="bg-[url('/src/assets/img/video-bg.png')] bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

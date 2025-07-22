import { useEffect, useState } from "react";

const Hero = ({ bgImage, title, description, person, fullHeight = false }) => {
  const [currentImage, setCurrentImage] = useState(bgImage);
  const [prevImage, setPrevImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (bgImage && bgImage !== currentImage) {
      setPrevImage(currentImage);
      setCurrentImage(bgImage);
      setFadeIn(true);

      const timeout = setTimeout(() => {
        setPrevImage(null);
        setFadeIn(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [bgImage]);

  return (
    <div className={`relative w-full ${fullHeight ? "h-screen" : "h-[75vh]"} overflow-hidden`}>

      {/* Background: New image fading in */}
      <img
        src={currentImage}
        alt="New Background"
        className={`absolute top-0 left-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
          fadeIn ? "opacity-0 animate-fade-in" : "opacity-100"
        }`}
      />

      {/* Background: Old image fading out */}
      {prevImage && (
        <img
          src={prevImage}
          alt="Old Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-20 animate-fade-out"
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-30" />

      {/* Foreground Content */}
     <div className={`relative z-40 flex flex-col items-center justify-center px-6 sm:px-12 text-white text-center ${fullHeight ? "h-screen" : "h-[75vh]"}`}>
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-end gap-8">
          {person?.image && (
            <img
              src={person.image}
              alt={person.name}
              className="w-36 h-36 md:w-72 md:h-72 object-cover rounded-md shadow-lg"
            />
          )}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[5px_5px_10px_#000000]">
              {person?.name || title}
            </h1>
            <p className="text-lg md:text-2xl mt-2 text-white drop-shadow-[3px_3px_6px_#000000]">
              {person?.role || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

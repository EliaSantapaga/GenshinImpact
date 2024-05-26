import { useEffect, useState } from "react";
import monstadt1 from "../assets/backgrounds/Monstadt-1.jpg";
import monstadt2 from "../assets/backgrounds/Monstadt-2.jpg";
import Characters from "./Characters";

function FontaineCharacters() {
  const [background, setBackground] = useState(0);
  const images = [monstadt1, monstadt2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((currentId) => (currentId + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="character-page container-fluid p-0"
      style={{
        backgroundImage: `url(${background ? images[0] : images[1]})`,
      }}
    >
      <Characters />
    </div>
  );
}

export default FontaineCharacters;

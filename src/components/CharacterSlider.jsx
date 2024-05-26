import { useRef, useState } from "react";
import leftButton from "../assets/other/Left-button.png";
import rightButton from "../assets/other/Right-button.png";
import { useCharacterContext } from "../context/CharacterContext";
// import CharacterCard from './CharacterCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

function CharacterSlider() {
  const { characterData } = useCharacterContext();
  // const { singleCharacter, setSingleCharacter } = useContext(AppContext);

  console.log(characterData);

  return (
    <div className="character-slider d-flex container-fluid pb-3">
      <div className="col-3 d-flex justify-content-end pe-3">
        <button className="slider-button">
          <img
            src={leftButton}
            alt="Previous"
            className="swiper-button-prev"
            tabIndex="-1"
            role="button"
            aria-label="Previous Character"
            aria-controls="swiper-wrapper-8ac752d74ef73fc7"
          />
        </button>
      </div>
      <div className="col-6 ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper d-flex align-items-center"
        >
          {characterData.map((char) => (
            <>
              <SwiperSlide key={char.id}>
                <div className="rounded border-card">
                  <div className="character-card rounded center-flex">
                    <img src={char.avatar} alt={char.name} />
                    <p className="character-card-name fs-6 text-center py-2">
                      {char.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* <div className='col-2'>
              <div className='character-card rounded center-flex'>
              <img
              src={char.avatar}
              alt={char.name}
              />
              <p className='character-card-name fs-6 text-center py-2'>
              {char.name}
              </p>
              </div>
            </div> */}
            </>
          ))}
        </Swiper>
      </div>
      <div className="col-3 d-flex justify-content-start ps-3">
        <button className="slider-button">
          <img
            src={rightButton}
            alt="Next"
            className="swiper-button-next"
            tabIndex="+1"
            role="button"
            aria-label="Next character"
            aria-controls="swiper-wrapper-8ac752d74ef73fc7"
          />
        </button>
      </div>
    </div>
  );
}

export default CharacterSlider;

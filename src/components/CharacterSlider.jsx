import leftButton from '../assets/other/Left-button.png';
import rightButton from '../assets/other/Right-button.png';
import CharacterCard from './CharacterCard';

function CharacterSlider() {
  return (
    <div className='character-slider d-flex container-fluid pb-3'>
      <div className='col-3 d-flex justify-content-end'>
        <button className='slider-button'>
          <img
            src={leftButton}
            alt='Previous'
          />
        </button>
      </div>
      <div className='col-6 center-flex'>
        <CharacterCard />
      </div>
      <div className='col-3 d-flex justify-content-start'>
        <button className='slider-button'>
          <img
            src={rightButton}
            alt='Next'
          />
        </button>
      </div>
    </div>
  );
}

export default CharacterSlider;

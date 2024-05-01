import leftButton from '../assets/other/Left-button.png';
import rightButton from '../assets/other/Right-button.png';
import { useCharacterContext } from '../context/CharacterContext';
// import CharacterCard from './CharacterCard';

function CharacterSlider() {
  const { characterData } = useCharacterContext();
  // const { singleCharacter, setSingleCharacter } = useContext(AppContext);

  console.log(characterData);

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
      <div className='col-6 d-flex align-items-center mx-0'>
        {characterData.map((char) => (
          <>
            <div className='col-2'>
              <div className='character-card rounded center-flex'>
                <img
                  src={char.avatar}
                  alt={char.name}
                />
                <p className='character-card-name fs-6 text-center py-2'>
                  {char.name}
                </p>
              </div>
            </div>
          </>
        ))}
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

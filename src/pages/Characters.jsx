import { useEffect, useState } from 'react';
import AppLayout from '../layout/AppLayout';
import monstadt1 from '../assets/Backgrounds/Monstadt-1.jpg';
import monstadt2 from '../assets/Backgrounds/Monstadt-2.jpg';
import blackBackground from '../assets/Other/BlackBackground.png';
import LocationSidebar from '../components/LocationSidebar';
import CharacterSlider from '../components/CharacterSlider';
import CharacterInfo from '../components/CharacterInfo';

function Characters() {
  const [background, setBackground] = useState(0);
  const images = [monstadt1, monstadt2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((currentId) => (currentId + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className='character-page container-fluid p-0'
      style={{
        backgroundImage: `url(${background ? images[0] : images[1]})`,
      }}
    >
      <img
        src={blackBackground}
        alt='Black background'
        className='black-background'
      />
      <AppLayout>
        <div className='row'>
          <div className='col-3'>
            <LocationSidebar />
          </div>
          <div className='col-9'>
            <CharacterInfo />
          </div>
        </div>
        <CharacterSlider />
      </AppLayout>
    </div>
  );
}

export default Characters;

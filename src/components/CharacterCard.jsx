import amberProfile from '../assets/Characters/Profile/Amber-profile.png';

function CharacterCard() {
  return (
    <div className='character-card rounded'>
      <img
        src={amberProfile}
        alt='Amber profile'
      />
      <p className='character-name fs-6 text-center py-2'>Amber</p>
    </div>
  );
}

export default CharacterCard;

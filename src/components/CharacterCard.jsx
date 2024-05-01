import amberProfile from '../assets/characters/profile/Amber-profile.png';

function CharacterCard(
  // { id }
  ) {
  return (
    <div className='character-card rounded'>
      <img
        src={amberProfile}
        alt='Amber profile'
      />
      <p className='character-card-name fs-6 text-center py-2'>Amber</p>
    </div>
  );
}

export default CharacterCard;

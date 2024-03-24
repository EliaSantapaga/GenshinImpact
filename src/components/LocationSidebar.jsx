import Space from './Space';

function LocationSidebar() {
  return (
    <ul className='location-sidebar d-flex flex-column'>
      <Space />
      <li className='location location--active'>Monstadt</li>
      <li className='location'>Liyue</li>
      <li className='location'>Inazuma</li>
      <li className='location'>Sumeru</li>
      <li className='location'>Fontaine</li>
      <li className='location'>Prossimamente</li>
    </ul>
  );
}

export default LocationSidebar;

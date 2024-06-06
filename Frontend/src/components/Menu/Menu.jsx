
import React, { useState } from 'react';
import './Menu.css'; // Import Menu-specific CSS
import monday from '../../assets/menui1.png'; // import your food images
import tuesday from '../../assets/menui2.png';
import wednesday from '../../assets/menui3.png';
import thursday from '../../assets/menui4.png';
import friday from '../../assets/menui5.png';
import saturday from '../../assets/menui6.png';
import sunday from '../../assets/menui7.png';

const Menu = () => {
  const [selectedDay, setSelectedDay] = useState(null); 

  const handleDayClick = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null); // If same day is clicked again, deselect it
    } else {
      setSelectedDay(day); // Otherwise, select the clicked day
    }
  };

  return (
    <div className='Menu'>
      <h3>SELECT DAY</h3>
      <div className="day-list">
        <button onClick={() => handleDayClick('monday')}>Monday</button>
        <button onClick={() => handleDayClick('tuesday')}>Tuesday</button>
        <button onClick={() => handleDayClick('wednesday')}>Wednesday</button>
        <button onClick={() => handleDayClick('thursday')}>Thursday</button>
        <button onClick={() => handleDayClick('friday')}>Friday</button>
        <button onClick={() => handleDayClick('saturday')}>Saturday</button>
        <button onClick={() => handleDayClick('sunday')}>Sunday</button>
      </div>
      {selectedDay && (
        <div className="menu-image">
          {/* Display the menu image for the selected day */}
          <img src={getMenuImage(selectedDay)} alt={`Menu for ${selectedDay}`} />
        </div>
      )}
    </div>
  );
}

// Helper function to get the menu image based on the selected day
const getMenuImage = (day) => {
  switch (day) {
    case 'monday':
      return monday;
    case 'tuesday':
      return tuesday;
    case 'wednesday':
      return wednesday;
    case 'thursday':
      return thursday;
    case 'friday':
      return friday;
    case 'saturday':
      return saturday;
    case 'sunday':
      return sunday;
    default:
      return null;
  }
};

export default Menu;

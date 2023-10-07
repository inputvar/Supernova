import React from 'react';
import Timer from './Timer';
import Resources from './Resources';

function MentalHealth() {
  const handleButtonClick = () => {
    // Use the history object to navigate to the desired URL
    window.location.href = 'http://localhost:8080/';
  };

  return (
    <div className="mentalTrauma">
      <div className="resources-container">
        <Resources />
      </div>
      <div className="content-container">
        <div className='timerDiv'><Timer /></div>
        <button className="btn btn-lg btn-dark tts" onClick={handleButtonClick}>
          Talk to Someone
        </button>
      </div>
    </div>
  );
}

export default MentalHealth;

import React, { useState } from 'react';
import Profile from './name';  // Import only the necessary components


function App() {
  const [showImages, setShowImages] = useState(false);

  const handleShowImages = () => {
    setShowImages(true);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="#" onClick={handleShowImages}>
              Works
            </a>
          </li>
        </ul>
      </nav>
      <Profile />
    </div>
  );
}

export default App;

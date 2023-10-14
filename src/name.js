import React, { useState } from 'react';
import './App.css';

function Profile() {
  const [showImages, setShowImages] = useState(false);

  const handleShowImages = () => {
    setShowImages(true);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className="pink-outline-button">
            <a href="#">Research</a>
          </li>
          <li className="pink-outline-button">
            <a href="#" onClick={handleShowImages}>
              Works
            </a>
          </li>
        </ul>
      </nav>
      <div className="profile-section">
        <div className="profile-text">
          <p>
            I am a recent graduate in Computer Science and Engineering from
            VIT-AP University, currently in my third year.
            <br />
            My passion lies in the realm of UI/UX design and development. I'm
            deeply fascinated by the process of crafting digital experiences that
            are both user-friendly and aesthetically pleasing. In pursuit of my
            aspiration to become a UI/UX developer, I have embarked on a journey
            to enhance my skills in both frontend and backend development. I am
            committed to mastering the technologies and tools that power the web
            and applications.
            <br />
            Furthermore, I believe in the power of Artificial Intelligence to
            revolutionize our digital world. As such, I'm delving into AI tools
            and technologies, aiming to integrate AI-driven solutions into the
            UI/UX designs I create.
          </p>
        </div>
        <div className="profile-image">
          <img src="9.png" alt="Centered Image" />
        </div>
      </div>
      {showImages && (
        <div>
          <img src="1.png" alt="Image 1" />
          <img src="2.png" alt="Image 2" />
          <img src="3.png" alt="Image 3" />
          <img src="4.png" alt="Image 4" />
          <img src="5.png" alt="Image 5" />
          <img src="6.png" alt="Image 6" />
          <img src="7.png" alt="Image 7" />
          <img src="8.png" alt="Image 8" />
        </div>
      )}
    </div>
  );
}

export default Profile
import React, { useState, useEffect } from 'react';
import '../css/LandingPage.css';

function LandingPage() {
  const slogan = "Securing Your Future, One Knot at a Time.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showSubText, setShowSubText] = useState(false);

  const typingSpeed = 50; // ms per character
  const earlyShowTime = 500; // ms before end to show <p>

  useEffect(() => {
    const timeRemaining = (slogan.length - index) * typingSpeed;

    // Show <p> early if 1 second before finishing
    if (!showSubText && timeRemaining <= earlyShowTime) {
      setShowSubText(true);
    }

    if (index < slogan.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + slogan.charAt(index));
        setIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, slogan, showSubText]);

  return (
    <div className='page_wrapper'>
      <div className="nav_wrapper">
        <div className="nav_component">
          <div className="nav_container">
            <div className="nav_logo-link">Golden Knot</div>
            <div className="navigation">
              <div className="nav_link">About</div>
              <div className="nav_link">Services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_wrapper">
        <div className="section_home-header">
          <div className="global_padding">
            <div className="home_content">
              <div className="home_layout">
                <div className="slogan_container">
                  <h1 className="typing">{displayedText}</h1>
                  {showSubText && (
                    <div className="fade-in">
                      <div className="subtext">Expert consulting solutions tailored to your business success</div>
                      <button className="book_button">Book a Consultation Now</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

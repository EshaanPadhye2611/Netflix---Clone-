import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // Define navigate
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className='nav_contents'>
        <img onClick={() => navigate("/")} className="nav_logo" src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt="Netflix Logo" />
        <img onClick={() => navigate("/profile")} className="nav_avatar" src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg' alt='' />
      </div>
    </div>
  );
}

export default Nav;

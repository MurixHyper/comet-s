import React from 'react';
import './ContactUs.css';
import comets from '../../assets/comets.png';
const ContactUs = () => {
  return (
    <div className="contactmain">
      <div className="general">
        <img src={comets} alt="" />
        <h2>Comet.S</h2>
        <p>Invest in your emotions</p>
      </div>
      <div className="contactInfo">
        <h2>Contact information</h2>
        <p>+40759323255</p>
        <p>Iasi</p>
        <p>Palas Shopping Mall, Str. Palas, <br/> Nr. 5D, Cladirea D4</p>
        <p>cometstock1@gmail.com</p>
        <p>Instagram: cometstock1</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10851.995020978396!2d27.5890288!3d47.1578788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb9c2af50f1d%3A0xe4c014f1ca16475a!2sPalas%20Mall!5e0!3m2!1sru!2sde!4v1700593254149!5m2!1sru!2sde" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

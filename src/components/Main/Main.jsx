import './Main.css';
import React from 'react';
import comets from '../../assets/comets.png';
import Minilogo from '../Minilogo/Minilogo';
import SocialMedia from '../SocialMedia/SocialMedia';
const Main= ()=>{
    return(
        <div className="maindiv">
            <div className="cover-image">
                <div className="logodiv">
                    <img className="mainimage" src={comets} alt="" />
                    <div className="maintext">
                        <h2>Comet.S</h2>
                        <p>Invest in your emotions</p>
                    </div>
                </div>
            </div>
            <Minilogo/>
            <div className="mainfooter">
                <div className="phone">
                    <p>+40759323255</p>
                </div>
                <SocialMedia/>
            </div>
        </div>
    )
}

export default Main;
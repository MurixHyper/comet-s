import React from "react"
import './Minilogo.css';
import minilogo from '../../assets/minilogo.png';

const Minilogo = () =>{
    return(
        <div className="div-minilogo">
          <img className="minilogo" src={minilogo} alt=""/>
          <hr/>
        </div>
    )
}

export default Minilogo;
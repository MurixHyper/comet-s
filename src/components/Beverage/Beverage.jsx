import React from "react";
import './Beverage.css';

const Beverage = ({beverage}) =>{
    return(
        <div className="beverage-card">
            <h2 className="beverage-title">{beverage.title}</h2>
            <p className="beverage-recipe">{beverage.ingrs}</p>
        </div>
    );
}

export default Beverage;
import React from "react";
import Beverage from "../Beverage/Beverage";
import './Beverages.css';

const Beverages = ({beverages, title, styles})=>{
    return(
        <div className="sub-menu-beverages">
            <h2 className={styles}>{title}</h2>
            <div className="sub-beverage">
                {beverages.map((el)=>(
                    <Beverage
                    key={el.id}
                    beverage={el}
                    />))}
            </div>
        </div>
    );
}

export default Beverages;
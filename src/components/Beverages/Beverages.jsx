import React from "react";
import Beverage from "../Beverage/Beverage";
import './Beverages.css';

const Beverages = ({beverages, title, styles})=>{
    return(
        <div className="sub-menu-beverages">
            <h2 className={styles}>{title}<hr/></h2>
            <div className="sub-beverage">
                <div className="half-sub-beverage">
                    {beverages.filter((el)=>el.id%2!==0).map((el)=>(
                        <Beverage
                        key={el.id}
                        beverage={el}
                        />))}
                </div>
                <div className="half-sub-beverage">
                    {beverages.filter((el)=>el.id%2===0).map((el)=>(
                        <Beverage
                        key={el.id}
                        beverage={el}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default Beverages;
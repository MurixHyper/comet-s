import React from "react";
import Hookah from "../Hookah/Hookah";
import './Hookahs.css';

const Hookahs = ({hookahs}) =>{
    return(
        <div className="sub-menu-hookahs">
            <h2 className="sub-menu-header">Hookah:<hr/></h2>
            <div className="sub-hookah">
                {hookahs.map((el)=>(
                    <Hookah
                    key={el.id}
                    hookah={el}
                    />))}
            </div>
        </div>
    )
}

export default Hookahs;
import './Main.css';
import comets from '../../images/comets.png';
const Main= ()=>{
    return(
        <div className="maindiv">
            <img className="mainimage" src={comets} alt="" />
            <div className="maintext">
                <h2>Comet.S</h2>
                <p>Invest in your emotions</p>
            </div>
        </div>
    )
}

export default Main;
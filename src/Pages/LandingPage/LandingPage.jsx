import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";
import avatar from '../../assets/avatarnuevo.png'


export default function LandingPage() {


  return (
    <div className={ style.landing_background}>
       
 
    <div className={style.contenedor}>
      
 
      </div>
      
      <Link to={"/home"}  className= {style.buttonLading}>
              
              <img className = {style.img} src={avatar}   height={'200px'} width={'200px'} border-radius={'150px'} />
  
          </Link>
         
    </div>
  );
}
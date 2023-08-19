import style from "./NavBar.module.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom"
import logo from '../../assets/logo.png'
import PowerButton from "../PowerButton/PowerButton";

const NavBar = () =>{
    
    const {pathname} = useLocation()

    return(
        <div id={style.NavBarContainer}>
            <img className={style.img} src={logo} width={'150px'}  />
            <PowerButton/>
            <ul>
                <Link to={"/about"} ><li id={pathname==="/about"? style.active:undefined} >ABOUT</li> </Link>
                <Link to={"/contactme"} ><li id={pathname.includes("/contactme")? style.active:undefined} >CONTACT ME</li> </Link>
                <Link to={"/cv"} ><li id={pathname==="/cv"? style.active:undefined} >CV</li></Link>
                
            </ul>
            
        </div>
    )
};


export default NavBar;
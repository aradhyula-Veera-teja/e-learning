// Night mode switch 
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import classes from './Theme.module.css';
function Theme(){
    var t=true;
    function ttt(t){
        // var ThemeSwitch =document.getElementById("HeadId");
        // if(t){
        //     console.log(ThemeSwitch);
        //     ThemeSwitch.style.backgroundColor="black";
        //     t=false;
        // }
        // else{
        //     ThemeSwitch.style.backgroundColor="#e0e0e0";
        // }
        
        
        
        // document..style.background='black';
    }
    
    return(
        <div className={classes.theme} id= "the" onClick={ttt}>
            <BsFillMoonStarsFill />
        </div>
    );
}
export default Theme;
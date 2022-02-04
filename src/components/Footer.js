// Footer designe and credits
import {GiLoveHowl} from 'react-icons/gi';
import classes from './Footer.module.css';
function Footer(){
    return(
        <footer>
            <h3>Made with<br /><br /><GiLoveHowl size='2em'/>
            <br />by<br/><br/><span className={classes.my}> veera teja </span></h3>
        </footer>
    );
}
export default Footer;
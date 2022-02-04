// Navigation side menu bar
import {Link} from 'react-router-dom';
import classes from './NavMenu.module.css';
import {FcElectricity} from 'react-icons/fc';
import {FaHome,FaBuilding} from 'react-icons/fa';
import {MdComputer,MdOutlineLaptopChromebook} from 'react-icons/md';
import {GiCircuitry,GiPowerLightning,GiGears,GiLaptop} from 'react-icons/gi';
import {GrPersonalComputer} from 'react-icons/gr';

function Navmenu(){
    return (
        <div className={classes.menu}>
            <nav>
                <li>
                    <Link to='/' ><FaHome/></Link>
                    <div className={classes.menuText}>
                        home
                    </div>
                </li>
                <li>
                    <Link to='/civil-page' ><FaBuilding /></Link>
                    <div className={classes.menuText}>
                        civil
                    </div>
                </li>
                <li>
                    <Link to='/eee-page' ><GiPowerLightning /></Link>
                    <div className={classes.menuText}>
                        eee
                    </div>
                </li>
                <li>
                    <Link to='/mech-page' ><GiGears /></Link>
                    <div className={classes.menuText}>
                        mech
                    </div>
                </li>
                <li>
                    <Link to='/ece-page' ><GiCircuitry /></Link>
                    <div className={classes.menuText}>
                        ece
                    </div>
                </li>
                <li>
                    <Link to='/cse-page' >< GiLaptop/></Link>
                    <div className={classes.menuText}>
                        cse
                    </div>
                </li>
            </nav>
        </div>
    );
}
export default Navmenu;

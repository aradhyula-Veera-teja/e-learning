// Clg Social media icons 
import {FaFacebookF,FaTwitter} from 'react-icons/fa';
import {BsInstagram,BsWhatsapp,BsMessenger} from 'react-icons/bs';
import classes from './SocialAccounts.module.css';
function SocialAccounts(){
    return(
        <section className={classes.sa}>
            <div>
                <h2>follow us on social media</h2>
            </div>
            <ul>
                <a href='#'>
                    <li>
                        <FaFacebookF className={classes.icons} size='1.5em'/>
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <BsInstagram className={classes.icons} size='1.5em'/>
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <FaTwitter className={classes.icons} size='1.5em'/>
                    </li>
                </a>
                
            </ul>
        </section>
    );
}
export default SocialAccounts;
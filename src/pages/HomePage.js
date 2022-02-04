import HomeSec from "../components/HomeSec";
import Placements from "../components/Placements";
import Section2 from "../components/Section2";
import SocialAccounts from "../components/SocialAccounts";
import VedioComponent from '../components/VedioComponent';

function HomePage(){
    return (
        <div>
            <HomeSec />
            <Section2 />
            <Placements />            
            <SocialAccounts />
        </div>
    );
}
export default HomePage;
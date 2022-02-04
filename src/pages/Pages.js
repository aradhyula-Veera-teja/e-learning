import { Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CivilPage from './CivilPage';
import CsePage from './CsePage';
import EcePage from './EcePage';
import EeePage from './EeePage';
import MechPage from './MechPage';
import classes from './Page.module.css';

function Pages(){
    return (
        <section className={classes.pageSection}>
            <Routes>
                <Route path='' exact element={  <HomePage /> } >
                  
                </Route>
                <Route path='/civil-page' element={<CivilPage />}>
                    
                </Route>
                <Route path='/cse-page' element={<CsePage />}>
                   
                </Route>
                <Route path='/ece-page' element={<EcePage/>}>
                    
                </Route>
                <Route path='/eee-page' element={<EeePage />}>
                    
                </Route>
                <Route path='/mech-page' element={<MechPage />}>
                    
                </Route>
            </Routes>
        </section>
    );
}
export default Pages;
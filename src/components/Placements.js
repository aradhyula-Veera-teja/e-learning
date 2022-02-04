import classes from './Placements.module.css';
function Placements(){
    return(
        <section className={classes.PlacementsSection}>
            <div className={classes.PlacementsHead}>
                <h3>Placements heading</h3>
            </div>
            <div className={classes.PlacementsBody}>
                <div><a href='#'>scrolling links links </a></div>
                <div><h2>placement images</h2></div>
                <div><h2>updates</h2> <br />  some links....... </div>
            </div>
            <div className={classes.PlacementsFooter}>
                company logos
            </div>
        </section>
    );
}
export default Placements;
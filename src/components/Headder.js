// headder designe
import classes from "./Headder.module.css";
function Headder() {
  return (
    <header id="HeadId">
      <div className={classes.roundlogo}></div>
      <div className={classes.logoHolder}>
        <div className={classes.gec}>
          {/* guntur engineering college */}
        </div>
        <div className={classes.kits}>
          {/* is now managed by <span>kits</span> */}
        </div>
      </div>
    </header>
  );
}
export default Headder;

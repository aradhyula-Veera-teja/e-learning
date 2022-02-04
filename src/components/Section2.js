import classes from './Section2.module.css';
function Section2(){
    return (
      <section className={classes.Section2Container}>
          <div className={classes.Section2InnerContainer}>
              <div className={classes.Section2ImageBox}>
                  
              </div>
              <div className={classes.Sectio2ContentBox}>
                  <h2>learn with joy</h2>
              </div>
          </div>
          <div className={classes.Section2InnerContainer}>
              <div className={classes.Sectio2ContentBox}>
              <h2>keep practicing</h2>
              </div>
              <div className={classes.Section2ImageBox}>
                  
              </div>
              
          </div>
      </section>  
    );
}
export default Section2;
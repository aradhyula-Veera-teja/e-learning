// Vedio component vedio cards
import classes from './VedioComponent.module.css';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {FaExpandArrowsAlt} from  'react-icons/fa';

function VedioComponent(){
    function PlayHandler(){
        console.log('paly clicked');
    }
    function ExpandHandler(){
        console.log('expand clicked');
        
    }
    /*function teja(props){
        console.log();
        console.log();
    }
    var t =[{'vname':'teja','path':'url path'},{'vname':'V2','path':'url path'},{'vname':'V3','path':'url path'}]
    t.forEach(this.props);*/
    return (
        <div className={classes.ve}>


            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.vedioBox}>
                    <div className={classes.vedioArea}>
                        <video src ={"../rec/test1.mp4"} width="100%" height='100%' autoplay muted />
                    </div>
                </div>
                <div className={classes.contentBox}>
                    <p>video title etc .......</p>
                    <div className={classes.vedioControls}>
                        <button onClick={PlayHandler}><BsFillPlayCircleFill /></button>
                        <button onClick={ExpandHandler} ><FaExpandArrowsAlt/></button>
                    </div>
                </div>
            </div>




            
               
        </div>
        
    );
}
export default VedioComponent;
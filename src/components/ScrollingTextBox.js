// Right side text scrolling box 
import { Link } from 'react-router-dom';
import {BsArrowsAngleExpand} from 'react-icons/bs';
import classes from './ScrollingTextBox.module.css';
function ScrollingTextBox(){
    // document.addEventListener('onmousemove',(e)=>{
    //     var x = document.querySelector(".ScrollingText");
    //     console.log(x);
    // }
    // );
    var expand;
    if (expand = document.getElementsByName("teja")){
        console.log(expand[0]);
    }
    console.log('hi veera teja');
    
    console.log('pavan');
    // expand.onClick=()=>{
    //     var tt = document.querySelector('.ScrollingText') ;
    //     tt.classList.toggle('.ScrollingActive');
    // }
    return (
        <div className={classes.ScrollingText } name="teja">
            <div className={classes.ScrollingTextTogle}>
                <BsArrowsAngleExpand />
            </div>
            <p>
                Enjoy learning with this wonderful web site
                {/* <Link to="https://docs.google.com/document/d/1kQZ9VKsM9chdw8iVYZtAfQwSNOlkiNbvbl6m48FnLiI/edit" >hi</Link> */}
                <br /><a href="https://docs.google.com/document/d/1kQZ9VKsM9chdw8iVYZtAfQwSNOlkiNbvbl6m48FnLiI/edit" target='blank'>link1</a>
                <br /><a href="https://docs.google.com/document/d/1kQZ9VKsM9chdw8iVYZtAfQwSNOlkiNbvbl6m48FnLiI/edit" target='blank'>link2</a>
                <br /><a href="https://docs.google.com/document/d/1kQZ9VKsM9chdw8iVYZtAfQwSNOlkiNbvbl6m48FnLiI/edit" target='blank'>link3</a>
                <br />for latest updates follow this link
                <br /><a href="https://docs.google.com/document/d/1kQZ9VKsM9chdw8iVYZtAfQwSNOlkiNbvbl6m48FnLiI/edit" target='blank'>link4</a>
            </p>
        </div>
    );
}
export default  ScrollingTextBox;
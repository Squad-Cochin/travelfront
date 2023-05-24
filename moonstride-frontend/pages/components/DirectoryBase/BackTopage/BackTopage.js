//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                        FILE IS A COMPONENT FOR SHOWING BACKTOPAGE LINK                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

import Styles from "./BackTopage.module.scss";
import Container from "react-bootstrap/Container";

// FUNCTION FOR BACKTOPAGE LINK
function backtopage(props){
    return(
        <div className={Styles.backtopage}>
            <Container>
                <a href={props.href} title={props.label} className={Styles.backlink}>{props.label}</a>
            </Container>
        </div>
        
        );
}
backtopage.defaultProps = {
    label:"Back",
    href:"#",
}
export default backtopage;
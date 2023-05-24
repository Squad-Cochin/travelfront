////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
//             PAGE HAVING A COMPONENT OF DETAILS SHOWING AT THE BOTTAM OF DETAILS PAGE               //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////



import Styles from './DetailContent.module.scss';

// FUNCTION FOR DETAILS COMPONENT
function DetailContent(props){
    let duration ,guideType, guideCount, startLocation, endLocation = '-';
    if(props.productData.duration){
      duration = (props.productData.duration / 60).toFixed(2);
    }
    if(props.productData.languageGuides.guideType){
      guideType = props.productData.languageGuides.guideType;
    }
    if(props.productData.languageGuides.guideCount){
      guideCount = props.productData.languageGuides.guideCount;
    }
    //Start or End location 
    if(props.productData.startPoint){
      startLocation = props.productData.startPoint;
    } 
    if(props.productData.endingPoint){
      endLocation = props.productData.endingPoint;
    } 

    return(
        <div className={Styles.cmssection}>
            {props.productData.description ? (
              <div>
                <h2 className="header-type1">About the activity / Overview</h2>
                <p className="base-text">
                  {props.productData.description}.
                </p>
              </div>
            ):null}
            
            { startLocation != '-' && startLocation ?(
              <div>
                <h2 className="header-type1">Location</h2>
                <p className="base-text">
                  <strong>Start point:</strong><br />{startLocation}
                  <br /><br />
                  <strong>End point:</strong><br />{endLocation}
                </p>
              </div>
            ) :null}

            {duration ? (
              <div>
                <h2 className="header-type1">Schedule</h2>
                <p className="base-text">Duration: {duration} Hours</p>
              </div>
            ):null}
            
            {guideType ? (
              <div>
                <h2 className="header-type1">Guide options</h2>
                <p className="base-text">
                  Guide type: {guideType}
                  <br />
                  Group size: {guideCount} People
                </p>
              </div>
            ):null}
        </div>
    );
}
DetailContent.defaultProps = {
  productData: {
    duration: 0,
    languageGuides: {
      guideType: '',
      guideCount: 0
    },
    startPoint: '',
    endingPoint: '',
    description: ''
  }
};    
export default DetailContent;
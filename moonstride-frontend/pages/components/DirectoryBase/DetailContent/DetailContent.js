import Styles from './DetailContent.module.scss';
function DetailContent(props){
    let duration ,guideType, guideCount, startLocation, endLocation = '-';
    if(props.productData.duration){
      duration = props.productData.duration / 60;
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
            </div>):null}
            
            {/* <h2 className="header-type1">Languages</h2> */}
            {/* <p className="base-text">Bilingual Tour - English/Spanish</p> */}
            
            { startLocation != '-' && startLocation ?(
              <div>
                <h2 className="header-type1">Location</h2>
                <p className="base-text">
                  <strong>Start point:</strong> {startLocation}
                  <br />
                  <strong>End point:</strong> {endLocation}
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
            
            {/* <h2 className="header-type1">Requirements</h2>
            <p className="base-text mb-5">
              Please notice that this activity is subject to a minimum of 2
              people.
              <br />
              Please note that the itinerary could vary due to force majeure
              circumstances.
              <br />
              Please note that excursions may be subject to change or not
              available during adverse weather conditions.
              <br />
              Passport or ID are required
            </p> */}
        </div>
    );
}
    
export default DetailContent;
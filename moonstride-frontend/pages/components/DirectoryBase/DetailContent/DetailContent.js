import Styles from './DetailContent.module.scss';
function DetailContent(props){
    console.log(props)
    let duration = '-';
    if(props.productData.itinerary.duration){
      let durationObject = props.productData.itinerary.duration
      if(durationObject.variableDurationToMinutes){
          duration = durationObject.variableDurationToMinutes / 60;
      }
      if(durationObject.fixedDurationInMinutes){
        duration = durationObject.fixedDurationInMinutes / 60;
      }

      
    }

    return(
        <div className={Styles.cmssection}>
            <h2 className="header-type1">About the activity / Overview</h2>
            <p className="base-text">
              {props.productData.description}.
            </p>
            <h2 className="header-type1">Languages</h2>
            <p className="base-text">Bilingual Tour - English/Spanish</p>
            <h2 className="header-type1">Location</h2>
            <p className="base-text">
              <strong>Start point:</strong> {props.productData.logistics.start[0].description}
              <br />
              <strong>End point:</strong> {props.productData.logistics.end[0].description}
            </p>
            <h2 className="header-type1">Schedule</h2>
            <p className="base-text">Duration: {duration} Hours</p>
            <h2 className="header-type1">Guide options</h2>
            <p className="base-text">
              Guide type: Guide
              <br />
              Group size: 12 People
            </p>
            <h2 className="header-type1">Requirements</h2>
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
            </p>
        </div>
    );
}
    
export default DetailContent;
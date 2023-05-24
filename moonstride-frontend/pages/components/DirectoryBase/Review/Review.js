//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//                    THIS COMPONENT DISPLAYS REVIEWS AND RATING IN DETAIL PAGE                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////



import Container from "react-bootstrap/Container";
import Styles from "./Review.module.scss";
import Row from "react-bootstrap/Row";

// FUNCTION FOR REVIEW COMPONENT
const Review = (props) => { 
  let reviewCountTotal = 0;
  for(let i = 0; i < props.reviewCountTotals.length; i++){
    reviewCountTotal = reviewCountTotal + props.reviewCountTotals[i].count;
  };
  let fiveStarPercentage = props.reviewCountTotals[4].count / reviewCountTotal * 100;
  const fiveStar ={
    width: fiveStarPercentage + '%'
  }
  let fourStarPercentage = props.reviewCountTotals[3].count / reviewCountTotal * 100;
  const fourStar ={
    width: fourStarPercentage + '%'
  }
  let threeStarPercentage = props.reviewCountTotals[2].count / reviewCountTotal * 100;
  const threeStar ={
    width: threeStarPercentage + '%'
  }
  let twoStarPercentage = props.reviewCountTotals[1].count / reviewCountTotal * 100;
  const twoStar ={
    width: twoStarPercentage + '%'
  }
  let oneStarPercentage = props.reviewCountTotals[0].count / reviewCountTotal * 100;
  const oneStar ={
    width: oneStarPercentage + '%'
  }

  const loopCount = 5;
  const items = Array.from({ length: loopCount });
  
  return (
    <header className={Styles.review_section}>
       <div className={Styles.title}>Review</div>

        {/* --------------------PROGRESSBAR SECTION START------------------ */}


        <div className={Styles.headerBody}>
          <div>
              <div className={Styles.averageRating}>
                <span className={Styles.RatingValue}>{props.combinedAverageRating.toFixed(1)}</span>
                <div className={Styles.starRating}>
                    <div className={Styles.stars}>
                    {items.map((_, index) =>
                      index + 1 <= Math.floor(props.combinedAverageRating) ? <svg key={index} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clipRule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                        </svg> : props.combinedAverageRating > Math.floor(props.combinedAverageRating) ? <svg key={index}  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                          <path clipRule="evenodd" d="M14.761 6.507a.828.828 0 00-.433-1.395L10.5 4.53a.785.785 0 01-.589-.447L8.201.456a.767.767 0 00-1.402 0L5.087 4.083a.785.785 0 01-.588.447l-.582.089-3.245.493a.828.828 0 00-.433 1.395l2.769 2.824c.185.192.269.46.225.724l-.654 3.987a.808.808 0 00.77.958.752.752 0 00.364-.096l3.423-1.883a.752.752 0 01.728 0l3.423 1.883a.75.75 0 00.363.096.808.808 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.824zm-3.438 2.167a1.782 1.782 0 00-.48 1.532l.609 3.719L8.315 12.2c-.25-.138-.53-.21-.815-.21V1.166l1.565 3.317c.242.52.728.886 1.295.974l3.584.545-2.621 2.672z"></path>
                        </svg> : <svg  key={index}  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                          <path clipRule="evenodd" d="M7.5 1.167l1.565 3.317c.242.52.728.885 1.295.974l3.583.544-2.62 2.673a1.782 1.782 0 00-.48 1.532l.609 3.718L8.315 12.2a1.689 1.689 0 00-1.63 0l-3.137 1.725.61-3.718a1.782 1.782 0 00-.481-1.532L1.056 6.002l3.583-.544a1.72 1.72 0 001.296-.974L7.5 1.167zM7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.434 1.395l2.77 2.823c.185.192.269.46.224.724l-.653 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.422 1.882a.75.75 0 00.364.096.809.809 0 00.77-.958l-.653-3.987a.841.841 0 01.225-.724l2.769-2.823a.828.828 0 00-.433-1.396L10.5 4.531a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                        </svg>
                    )}
                    </div>
                </div>
              </div>
              <div className={Styles.Count}>{reviewCountTotal} reviews</div>
          </div>
          <div className={Styles.ratingsWithTitle}>
              <div className={Styles.subTitle}>Total review count and overall rating based on Viator and Tripadvisor reviews</div>
              <div className={Styles.ratingBars}>

                <button className={Styles.label} type="button" tabIndex="0" aria-pressed="false">5 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabIndex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div style={fiveStar} className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabIndex="-1">{props.reviewCountTotals[4].count}</div>
                
                <button className={Styles.label} type="button" tabIndex="0" aria-pressed="false">4 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabIndex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div style={fourStar} className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabIndex="-1">{props.reviewCountTotals[3].count}</div>

                <button className={Styles.label} type="button" tabIndex="0" aria-pressed="false">3 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabIndex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div style={threeStar} className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabIndex="-1">{props.reviewCountTotals[2].count}</div>

                <button className={Styles.label} type="button" tabIndex="0" aria-pressed="false">2 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabIndex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div style={twoStar} className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabIndex="-1">{props.reviewCountTotals[1].count}</div>

                <button className={Styles.label} type="button" tabIndex="0" aria-pressed="false">1 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabIndex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div style={oneStar} className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabIndex="-1">{props.reviewCountTotals[0].count}</div>
               
              </div>
          </div>
        </div>
      
        {/* --------------------PROGRESSBAR SECTION END------------------ */}
        {/* --------------------REVIEW SECTION START------------------ */}

        <div className={Styles.review}>
          {props.userReviews.map((_,rCount)=>
            <div key={rCount} >
            <div className={Styles.title}>
              <div className={Styles.starRating}>
                  <div className={Styles.stars}>
                  {items.map((_, index) =>
                    index < props.userReviews[rCount].rating ? 
                      <svg key={index} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clipRule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>:
                      <svg key={index} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clipRule="evenodd" d="M7.5 1.167l1.565 3.317c.242.52.728.885 1.295.974l3.583.544-2.62 2.673a1.782 1.782 0 00-.48 1.532l.609 3.718L8.315 12.2a1.689 1.689 0 00-1.63 0l-3.137 1.725.61-3.718a1.782 1.782 0 00-.481-1.532L1.056 6.002l3.583-.544a1.72 1.72 0 001.296-.974L7.5 1.167zM7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.434 1.395l2.77 2.823c.185.192.269.46.224.724l-.653 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.422 1.882a.75.75 0 00.364.096.809.809 0 00.77-.958l-.653-3.987a.841.841 0 01.225-.724l2.769-2.823a.828.828 0 00-.433-1.396L10.5 4.531a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>
                    )}
                      
                    </div>
                </div>
                <span className={Styles.title}>
                    <div>Highly Recommended!</div>
                </span>
              </div>
              <div className={Styles.subtitle}>
                {props.userReviews[rCount].userName}
              </div>
              <div>
                <div className={Styles.details}>{props.userReviews[rCount].text}</div>
              </div>
              <br /><br />
          </div>

          )}
        
</div>
  

        {/* --------------------REVIEW SECTION END------------------ */}



    </header>
  );
};
Review.defaultProps = {
  reviewCountTotals : [
       [],
       [],
       [],
       [],
       []     
  ],
  combinedAverageRating : 0,
  userReviews: []
}
export default Review;

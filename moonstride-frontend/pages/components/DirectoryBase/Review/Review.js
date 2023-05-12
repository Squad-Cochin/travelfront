// {This component displays the moonstride logo on the homepage}
import Container from "react-bootstrap/Container";
import Styles from "./Review.module.scss";
import Row from "react-bootstrap/Row";

const Review = () => { 
  return (
    <header className={Styles.review_section}>
       <div className={Styles.title}>Review</div>

        {/* --------------------PROGRESSBAR SECTION START------------------ */}


        <div className={Styles.headerBody}>
          <div>
              <div className={Styles.averageRating}>
                <span className={Styles.RatingValue}>4.0</span>
                <div className={Styles.starRating}>
                    <div className={Styles.stars}>
                      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                          <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>
                      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                          <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>
                      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                          <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>
                      {/* Half Filled star */}
                      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M14.761 6.507a.828.828 0 00-.433-1.395L10.5 4.53a.785.785 0 01-.589-.447L8.201.456a.767.767 0 00-1.402 0L5.087 4.083a.785.785 0 01-.588.447l-.582.089-3.245.493a.828.828 0 00-.433 1.395l2.769 2.824c.185.192.269.46.225.724l-.654 3.987a.808.808 0 00.77.958.752.752 0 00.364-.096l3.423-1.883a.752.752 0 01.728 0l3.423 1.883a.75.75 0 00.363.096.808.808 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.824zm-3.438 2.167a1.782 1.782 0 00-.48 1.532l.609 3.719L8.315 12.2c-.25-.138-.53-.21-.815-.21V1.166l1.565 3.317c.242.52.728.886 1.295.974l3.584.545-2.621 2.672z"></path></svg>
                       {/* None Filled star */}
                      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M7.5 1.167l1.565 3.317c.242.52.728.885 1.295.974l3.583.544-2.62 2.673a1.782 1.782 0 00-.48 1.532l.609 3.718L8.315 12.2a1.689 1.689 0 00-1.63 0l-3.137 1.725.61-3.718a1.782 1.782 0 00-.481-1.532L1.056 6.002l3.583-.544a1.72 1.72 0 001.296-.974L7.5 1.167zM7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.434 1.395l2.77 2.823c.185.192.269.46.224.724l-.653 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.422 1.882a.75.75 0 00.364.096.809.809 0 00.77-.958l-.653-3.987a.841.841 0 01.225-.724l2.769-2.823a.828.828 0 00-.433-1.396L10.5 4.531a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path></svg>
                    </div>
                </div>
              </div>
              <div className={Styles.Count}>387 reviews</div>
          </div>
          <div className={Styles.ratingsWithTitle}>
              <div className={Styles.subTitle}>Total review count and overall rating based on Viator and Tripadvisor reviews</div>
              <div className={Styles.ratingBars}>

                <button className={Styles.label} type="button" tabindex="0" aria-pressed="false">5 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabindex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabindex="-1">355</div>
                
                <button className={Styles.label} type="button" tabindex="0" aria-pressed="false">4 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabindex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabindex="-1">155</div>

                <button className={Styles.label} type="button" tabindex="0" aria-pressed="false">3 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabindex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabindex="-1">55</div>

                <button className={Styles.label} type="button" tabindex="0" aria-pressed="false">2 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabindex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div  className={Styles.progressBarFill}></div>
                    </div>
                </div>
                <div className={Styles.reviewCount} role="button" tabindex="-1">15</div>

                <button className={Styles.label} type="button" tabindex="0" aria-pressed="false">1 stars</button>
                <div className={Styles.progressBarWrap} role="button" aria-label="Show 5 star reviews" tabindex="-1">
                    <div className={Styles.progressBar} role="progressbar" aria-label="Amount of 5 star reviews" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      {/* <div style="width: 94%;" className={Styles.progressBarFill}></div> */}
                    </div>
                </div>
               
              </div>
          </div>
        </div>
      
        {/* --------------------PROGRESSBAR SECTION END------------------ */}
        {/* --------------------REVIEW SECTION START------------------ */}

        <div className={Styles.review}>
        <div>
            <div className={Styles.title}>
              <div className={Styles.starRating}>
                  <div className={Styles.stars}>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                    </svg>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                    </svg>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                    </svg>                 
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                        <path clip-rule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                    </svg>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.starIcon}>
                      <path clip-rule="evenodd" d="M7.5 1.167l1.565 3.317c.242.52.728.885 1.295.974l3.583.544-2.62 2.673a1.782 1.782 0 00-.48 1.532l.609 3.718L8.315 12.2a1.689 1.689 0 00-1.63 0l-3.137 1.725.61-3.718a1.782 1.782 0 00-.481-1.532L1.056 6.002l3.583-.544a1.72 1.72 0 001.296-.974L7.5 1.167zM7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.434 1.395l2.77 2.823c.185.192.269.46.224.724l-.653 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.422 1.882a.75.75 0 00.364.096.809.809 0 00.77-.958l-.653-3.987a.841.841 0 01.225-.724l2.769-2.823a.828.828 0 00-.433-1.396L10.5 4.531a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path></svg>
                  </div>
              </div>
              <span className={Styles.title}>
                  <div>Highly Recommended!</div>
              </span>
            </div>
            <div className={Styles.subtitle}>
              Mylene_S, May 2023
            </div>
            <div>
              <div className={Styles.details}>We had Mahi as our guide and please request him!!! Here by far is not only knowledgeable and makes sure you understand his explanation but he is also the best Instagram/ TikTok photographer and videographer! Sohan, the driver was so pleasant and always made sure we were comfortable. 
                  Highly recommended!
              </div>
            </div>
            {/* <div className={Styles.helpful}>
              <div className={Styles.helpfulCaptionGroup}>
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={Styles.icon}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 2c-.61 0-1.06.29-1.33.7-.25.4-.34.88-.34 1.3 0 .62-.3 1.52-.8 2.26-.4.58-.86.97-1.3 1.13A.75.75 0 004.87 7H2.75a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h2.13c.4 0 .75-.34.75-.75v-.12c.17.08.34.18.55.3l.04.02c.41.23.96.55 1.57.55h2.95c1.7 0 3.26-1.16 3.26-2.95V8c0-1.28-1.03-2.5-2.75-2.5-.12 0-.25-.04-.25-.18V4c0-.34-.05-.81-.3-1.23A1.55 1.55 0 009.3 2zM4.61 8v5H3V8h1.62zm1 4.06l.36.13c.24.1.47.24.68.35l.02.02c.47.27.8.44 1.11.44h2.95c1.3 0 2.26-.85 2.26-1.95V8c0-.72-.57-1.5-1.75-1.5C10.58 6.5 10 6 10 5.32V4c0-.26-.04-.53-.16-.72C9.76 3.13 9.62 3 9.3 3c-.24 0-.38.1-.48.25-.11.18-.18.45-.18.75 0 .87-.4 1.96-.98 2.83A3.66 3.66 0 015.62 8.4"></path>
                  </svg>
                  <button type="button" className={Styles.helpfulCaption}>Helpful</button>
              </div>
            </div> */}
        </div>
</div>
  

        {/* --------------------REVIEW SECTION END------------------ */}



    </header>
  );
};

export default Review;

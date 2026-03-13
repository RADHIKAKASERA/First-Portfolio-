import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Engineer II</h4>
                <h5>Expedia Group</h5>
              </div>
              <h3>2019 - PRESENT</h3>
            </div>
            <p>
              Designed and developed iOS features for Expedia App using Swift, SwiftUI, GraphQL following MVVM pattern.
              Spearheaded migration of critical UI components from UIKit to SwiftUI, improving performance, scalability, and maintainability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer in Test I</h4>
                <h5>Hotwire</h5>
              </div>
              <h3>2018 - 2019</h3>
            </div>
            <p>
              Developed and maintained automated test frameworks for iOS and Android applications using XCUITest, Appium, and Espresso.
              Improved test coverage through automation of analytics tracking and API validation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Assurance Analyst</h4>
                <h5>Isobar</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Authored and executed test cases for mobile applications.
              Conducted manual exploratory and regression testing for Apple devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

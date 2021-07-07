import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import shoes from "../../assets/shoes.png";
import chronometer from "../../assets/chronometer.png";
import distance from "../../assets/distance.png";
import averageSpeed from "../../assets/icons8-speed-50.png";
import averagePace from "../../assets/icons8-sand-timer-50.png";
import averageSteps from "../../assets/icons8-running-50.png";

class CarouselModal extends React.Component {
  render() {
    const distanceData = this.props.data.dataDistance / 1000;
    const durationData = this.props.data.dataDuration;
    const stepsData = this.props.data.dataSteps;
    const avgSpeed = distanceData;
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={distance} alt="logo" className="distance-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">{distanceData} km</p>
                <p className="activity-results">Distance</p>
              </div>
            </div>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={chronometer} alt="logo" className="chronometer-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">{durationData}</p>
                <p className="activity-results">Duration</p>
              </div>
            </div>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={shoes} alt="logo" className="shoes-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">{stepsData}</p>
                <p className="activity-results">Steps</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={averageSpeed} alt="logo" className="distance-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">{avgSpeed} km/h</p>
                <p className="activity-results">Avg speed</p>
              </div>
            </div>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={averagePace} alt="logo" className="chronometer-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">07:43/km</p>
                <p className="activity-results">Avg pace</p>
              </div>
            </div>
            <div className="boxes-modal">
              <div className="boxes-img">
                <img src={averageSteps} alt="logo" className="shoes-img" />
              </div>
              <div className="img-selected">
                <p className="activity-information">1339/km</p>
                <p className="activity-results">Avg steps</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselModal;

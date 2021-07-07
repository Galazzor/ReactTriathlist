import React from "react";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dashboard.css";
import "weather-icons/css/weather-icons.css";

import shoes from "../assets/shoes.png";
import distance from "../assets/distance.png";
import chronometer from "../assets/chronometer.png";
import Scenery from "../assets/Scenery.jpg";

import app from "../components/Firebase";
import Weather from "../components/layout/Weather";
import CarouselModal from "../components/layout/Carousel";
import Scheduler from "../components/layout/SchedulerDashboard";

var DateDiff = require("date-diff");
var globalDataDistance;
var globalDataDuration;
var globalDataSteps;
var globalDataActivityStart;
var currentDate = new Date();
class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      dataDistance: 0,
      dataDuration: 0,
      dataSteps: 0,
      dataActivityStart: null,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleLoadingFromDatabase = () => {
    const ref = app.database().ref("Activities").limitToFirst(1);
    var myUserEmail = app.auth().currentUser.email;

    ref
      .orderByChild("userEmail")
      .equalTo(myUserEmail)
      .once("child_added", function (snapshot) {
        var date = Date.parse(snapshot.val().activityStart);
        // console.log(
        //   snapshot.key + " was " + snapshot.val().activityStart + " m tall"
        // );
        globalDataDistance = snapshot.val().distance;
        globalDataDuration = snapshot.val().duration;
        globalDataSteps = snapshot.val().steps;
        globalDataActivityStart = date;
      });
  };

  componentDidMount() {
    setTimeout(() => {
      this.handleLoadingFromDatabase();
      this.setState({
        dataDistance: globalDataDistance,
        dataDuration: globalDataDuration,
        dataSteps: globalDataSteps,
        dataActivityStart: globalDataActivityStart,
      });
    }, 1500);
  }

  render() {
    const data = this.state;
    const now = 100;
    const noviDatum = new Date(this.state.dataActivityStart)
    var diff = new DateDiff(currentDate, noviDatum);
    const dateDiff = Math.floor(diff.days())
    return (
      <Fragment>
        <div className="parent" onLoad={this.handleLoadingFromDatabase}>
          <div className="div1">
            <Card className="card">
              <Card.Header>Latest activity</Card.Header>
              <Card.Body>
                <h6>Fantastic session!</h6>
                <div>
                  <div className="boxes">
                    <div className="boxes-img">
                      <img src={distance} alt="logo" className="distance-img" />
                    </div>
                    <div className="img-selected">
                      <p className="activity-information">
                        {this.state.dataDistance/1000} km
                      </p>
                      <p className="activity-results">Distance</p>
                    </div>
                  </div>
                  <div className="boxes">
                    <div className="boxes-img">
                      <img
                        src={chronometer}
                        alt="logo"
                        className="chronometer-img"
                      />
                    </div>
                    <div className="img-selected">
                      <p className="activity-information">
                        {this.state.dataDuration}
                      </p>
                      <p className="activity-results">Duration</p>
                    </div>
                  </div>
                  <div className="boxes">
                    <div className="boxes-img">
                      <img src={shoes} alt="logo" className="shoes-img" />
                    </div>
                    <div className="img-selected">
                      <p className="activity-information">
                        {this.state.dataSteps}
                      </p>
                      <p className="activity-results">Steps</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <div>
                  <div className="div-activity">
                    <button
                      className="btn-details"
                      onClick={() => this.handleModalShowHide()}
                    >
                      Details
                    </button>
                  </div>
                  <Modal show={this.state.showHide}>
                    <Modal.Header
                    //closeButton
                    //onClick={() => this.handleModalShowHide()}
                    >
                      <div className="modal-img">
                        <img src={Scenery} alt="logo" className="img-fluid" />
                      </div>
                    </Modal.Header>
                    <Modal.Body>
                      <Fragment>
                        <h5>Fantastic session!</h5>
                      </Fragment>
                      <CarouselModal data={data}/>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => this.handleModalShowHide()}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <div className="div-activity right-align">{dateDiff} days ago</div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="div2">
            <Card>
              <Card.Body>
                <Card.Title>Schedule</Card.Title>
                <Scheduler />
              </Card.Body>
            </Card>
          </div>
          <div className="div3">
            <Card>
              <Card.Body>
                <Card.Title>Weekly Goal</Card.Title>
                <div>
                  <ProgressBar now={now} label={`${now}%`} />
                </div>
                <div>
                  <div className="div-activity">
                    <p>Progress:</p>
                    <p>left:</p>
                  </div>
                  <div className="div-activity right-align">
                    <p className="right-align">{now}/100 km</p>
                    <p className="right-align">2 days</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="div4">
            <Card>
              <Card.Body>
                <Card.Title>This Week</Card.Title>
                <div>
                  <div className="div-activity">
                    <p>Activities Done:</p>
                    <p>Burned Calories:</p>
                    <p>Time Spent:</p>
                  </div>
                  <div className="div-activity right-align">
                    <p className="right-align">18</p>
                    <p className="right-align">3724 kcal</p>
                    <p className="right-align">7h 27m</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="div5">
            <Card>
              <div className="weather-shrinking">
                <Weather />
              </div>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DashboardPage;

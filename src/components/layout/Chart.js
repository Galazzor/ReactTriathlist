import React from "react";

import {
  Chart,
  Series,
  Pane,
  ValueAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Label,
  Format,
  LoadingIndicator,
  Title,
  Grid
} from "devextreme-react/chart";

import DataSource from 'devextreme/data/data_source';
import SelectBox from 'devextreme-react/select-box';

import { activitiesData, dataSideBar, activities } from "../dataChart.js";

class ChartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);

    this.chartDataSource = new DataSource({
      store: {
        type: "array",
        key: "id",
        data: [{dataSideBar}]
      },
      filter: ['Id', '=', 1],
      paginate: false
    });

    this.onValueChanged = (data) => {
      this.chartDataSource.filter(['Id', '=', data.value]);
      this.chartDataSource.load();
    };
  }
  handleChange(e) {
    this.setState({
      type: e.value,
    });
  }
  render() {
    return (
      <div class="dx-viewport">
        <Chart
        id="chart"
        dataSource={activitiesData}
        defaultPane="bottomPane"
        title="Activites details"
      >
        <CommonSeriesSettings argumentField="day" />
        <Series
          pane="topPane"
          color="#97c95c"
          type="bar"
          valueField="distance"
          name="Distance, km"
        />
        <Series
          pane="topPane"
          valueField="avgPace"
          name="Average pace, km/h"
        >
          <Label
            visible={true}
            customizeText={paceCustomizeText}
          />
        </Series>
        <Series
          type="bar"
          valueField="time"
          name="time, min"
        >
          <Label
            visible={true}
            customizeText={timeCustomizeText}
          />
        </Series>

        <Pane name="topPane" />
        <Pane name="bottomPane" />

        <ValueAxis pane="bottomPane">
          <Grid visible={true} />
          <Title text="time, min" />
        </ValueAxis>
        <ValueAxis pane="topPane">
          <Grid visible={true} />
          <Title text="Distance, km" />
        </ValueAxis>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
      </Chart>
      <div className="action">
          <SelectBox
            id="selectbox"
            width={150}
            valueExpr="id"
            displayExpr="name"
            items={activities}
            defaultValue={1}
            onValueChanged={this.onValueChanged} />
        </div>
        <Chart
          id="chart"
          title="Time spent on activities (in minutes)"
          dataSource={dataSideBar}
        >
          <CommonSeriesSettings
            argumentField="day"
            type="bar"
          >
            <Label visible={true}>
              <Format type="fixedPoint" precision={0} />
            </Label>
          </CommonSeriesSettings>
          <Series argumentField="day" valueField="Swimming" name="Swimming" />
          <Series valueField="Bicycle" name="Cycling" />
          <Series valueField="Running" name="Running" />
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
          ></Legend>
          <Export enabled={true} />
          <LoadingIndicator enabled={true} />
        </Chart>
      </div>
    );
  }
}

function paceCustomizeText({ valueText }) {
  return `${valueText} km/h`;
}

function timeCustomizeText({ valueText }) {
  return `${valueText} min`;
}

export default ChartPage;

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

// import '../../node_modules/react-vis/dist/style.css';
// import { RadialChart } from 'react-vis'

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  coughsDetectedLegendPie,
  coughsDetectedDataPie,
  optionsCoughsDetected,
  characteristicsLegendPie,
  characteristicsDataPie,
  optionsCharacteristicsDetected,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataSeverity,
  optionsSeverity,
  responsiveSeverity,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    console.log("COUGHS DETECTED", coughsDetectedDataPie)
    console.log("CHARACTRISTICS", characteristicsDataPie)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Severity"
                category="Performance To Date"
                stats="Updated Now"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSeverity}
                      type="Line"
                      options={optionsSeverity}
                      responsiveOptions={responsiveSeverity}
                    />
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Coughs Detected"
                stats="Updated now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={coughsDetectedDataPie} options={optionsCoughsDetected} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(coughsDetectedLegendPie)}</div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Coughs Detected"
                stats="Updated now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={characteristicsDataPie} options={optionsCharacteristicsDetected} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(characteristicsLegendPie)}</div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

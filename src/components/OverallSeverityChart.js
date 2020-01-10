import React from 'react'
import { dummyData } from '../dummy_data/cough_history'

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from '../../node_modules/react-vis/dist/index';

const MSEC_DAILY = 86400000;

function sanitizeTime(time) {
  if (time.substring(time.length - 2) === "PM") {
    //length is 10 if the hour is single digit
    if (time.length === 10) {
      return (parseInt(time.substring(0,2), 10) + 12).toString() + time.substring(1,7)
    //length is 11 if the hour is double digits
    } else if (time.length === 11) {
      if (time.substring(0,2) !== "12") {
        return (parseInt(time.substring(0,2), 10) + 12).toString() + time.substring(2,8)
      } else {
        return time.substring(0,8)
      }
    }
  } else if (time.substring(time.length - 2) === "AM") {
    if (time.length === 10) {
      return time.substring(0,7)
    } else if (time.length === 11) {
      if (time.substring(0,2) !== "12") {
        return time.substring(0,8)
      } else {
        return "00" + time.substring(2,8)
      }
    }
  }
}

function OverallSeverityChart() {
  // console.log("testing:", new Date(dummyData[0].created_at + " " + sanitizeTime(dummyData[0].time)).getTime())
  const formattedData = dummyData.map( data => {
    return {
      x: new Date(data.created_at + " " + sanitizeTime(data.time)).getTime(),
      y: data.severity
    }
  })

  // console.log(formattedData)
  return (
    <div>
      <h3>Overall Chart To Date</h3>
      <XYPlot xType="time" width={600} height={600}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Time" />
        <YAxis title="Severity" />
        <LineSeries
          data={formattedData}
        />
      </XYPlot>
    </div>
  )
}

export default OverallSeverityChart

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
    // console.log((parseInt(time.substring(0,2), 10) + 12).toString())
  }
}

function OverallSeverityChart() {
  console.log("testing:", new Date(dummyData[0].created_at + " " + sanitizeTime(dummyData[0].time)))
  // const testDate = new Date(dummyData[0].created_at + " 0" + dummyData[0].time.substring(0,7))
  return (
    <div>derp</div>
  )
}

export default OverallSeverityChart

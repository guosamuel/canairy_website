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

function OverallSeverityChart() {
  const testDate = new Date(dummyData[0].created_at + " 0" + dummyData[0].time.substring(0,6))
  // const testTime = new Date(dummyData[0].time)
  console.log("TIME", testDate)
  return (
    <div>derp</div>
  )
}

export default OverallSeverityChart

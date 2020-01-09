import React from 'react'
import { dummyData } from '../dummy_data/cough_history.js'
import '../../node_modules/react-vis/dist/style.css';
import { RadialChart } from 'react-vis'

function CoughDetectedChart() {
  const coughsDetected = dummyData.reduce( (sum, cough) => {
    return ({cough_detected: sum.cough_detected + cough.cough_detected})
  })
  // console.log(coughsDetected)
  const coughsNotDetected = dummyData.length - coughsDetected.cough_detected
  const coughData = [
    {angle: coughsDetected.cough_detected, innerRadius: 0.5, label: "Coughs Detected"},
    {angle: coughsNotDetected, innerRadius: 0.5, label: "Coughs Not Detected"}]
  // console.log(coughData)

  return (
    <div>
    <h3>Coughs Detected</h3>
    <RadialChart
      data={coughData}
      width={300}
      height={300}
      showLabels={true}
    />
    </div>
  )
}

export default CoughDetectedChart

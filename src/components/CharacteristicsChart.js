import React from 'react'
import { dummyData } from '../dummy_data/cough_history.js'
import '../../node_modules/react-vis/dist/style.css';
import { RadialChart } from 'react-vis'

function CharacteristicsChart() {
  //characteristics refer to wet or dry. It is binary
  //assuming 1 means wet
  const wet = dummyData.reduce( (sum, cough) => {
    return ({characteristics: sum.characteristics + cough.characteristics})
  })
  const dry = dummyData.length - wet.characteristics
  const characteristicsData = [
    {angle: wet.characteristics, label: 'Wet', innerRadius: 0.5, showLabels: true},
    {angle: dry, label: 'Dry', innerRadius: 0.5, showLabels: true}
  ]

  return (
    <div>
    <h3>Characteristics (Wet/Dry)</h3>
    <RadialChart
      data={characteristicsData}
      width={300}
      height={300}
    />
    </div>
  )
}

export default CharacteristicsChart

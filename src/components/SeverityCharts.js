import React from 'react'
import DailySeverityChart from './DailySeverityChart'
import OverallSeverityChart from './OverallSeverityChart'

function SeverityCharts() {
  return (
    <div>
      <DailySeverityChart />
      <OverallSeverityChart />
    </div>
  )
}

export default SeverityCharts

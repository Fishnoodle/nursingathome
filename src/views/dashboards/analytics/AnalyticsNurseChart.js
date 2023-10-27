// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import LinearProgress from '@mui/material/LinearProgress'

// ** Customer Imports
import CardStatisticsWithAreaChart from 'src/views/ui/cards/statistics/CardStatisticsWithAreaChart'

const data = [{ data: [30, 84, 11, 76, 0, 49, 9] }]

const AnalyticsEarningReports = () => {
  return (
    <CardStatisticsWithAreaChart
      stats='97.5k'
      chartColor='warning'
      avatarColor='warning'
      title='Orders Received'
      avatarIcon='tabler:package'
      chartSeries={data}
    />
  )
}

export default AnalyticsEarningReports

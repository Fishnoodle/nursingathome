import React, { useState, useEffect } from 'react'

// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject'
import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports'
import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState'
import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider'

// ** Nurse Component
import AnalyticsNurseChart from 'src/views/dashboards/analytics/AnalyticsNurseChart'

// ** Calendar

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const AnalyticsDashboard = () => {


  const history = useHistory()
  const [quote, setQuote] = useState('')
  const [tempQuote, setTempQuote] = useState('')

  async function populateQuote() {
    console.log("requesting fetch from api/quote")

    const req = await fetch('https://nursingathome.ca:1337/api/quote', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })

    const data = await req.json()

    console.log('DATA LOG')
    console.log(data)

    if (data.status === 'ok') {
      setQuote(data.quote)
    } else {
      alert(data.error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      const user = jwt.decode(token)
      console.log(user)
      if (!user) {
        console.log('TOKEN NOT FOUND')
        localStorage.removeItem('token')
        history.replace('/login')
      } else {
        console.log('Token has been decoded for user!')
        populateQuote()
      }
    }
  }, [])

  /*
  async function updateQuote(event) {
    event.preventDefault()

    const req = await fetch('https://nursingathome.ca:1337/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quote: tempQuote
      }),
    })

    const data = await req.json()
    console.log(data)

    if (data.status === 'ok') {
      setQuote(tempQuote)
      setTempQuote('')
    } else {
      alert(data.error)
    }
  }
  */

  return (
    <>  
        <ApexChartWrapper>
        <KeenSliderWrapper>
          <Grid container spacing={4}>
            {/*<Grid item xs={12} lg={6}>
      <AnalyticsWebsiteAnalyticsSlider />
</Grid> */}
            <Grid item xs={6} sm={6} lg={4}>
              <AnalyticsOrderVisits />
            </Grid>
            <Grid item xs={6} sm={6} lg={4}>
              <AnalyticsOrderVisits />
            </Grid>
            <Grid item xs={8}>
              <CardStatsWithAreaChart
                stats='Blood Pressure History'
                chartColor='info'
                avatarColor='info'
                title='11 - 18th Sep 2023'
                avatarIcon='tabler:ribbon-health'
                chartSeries={[{ data: [129, 133, 142, 141, 137, 139, 140] }]} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <AnalyticsSourceVisits />
            </Grid>
            <Grid item xs={12} md={6}>
              <AnalyticsEarningReports />
            </Grid>
            <Grid item xs={12} md={6}>
              <AnalyticsSupportTracker />
            </Grid>
            {/*<Grid item xs={12} md={6} lg={4}>
      <AnalyticsSalesByCountries />
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <AnalyticsTotalEarning />
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <AnalyticsMonthlyCampaignState />
    </Grid>
*/}
            <Grid item xs={12} lg={8}>
              <AnalyticsProject />
            </Grid>
          </Grid>
        </KeenSliderWrapper>
      </ApexChartWrapper></>
  )
}

export default AnalyticsDashboard

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AnalyticsOrderVisits = () => {
  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(5)} !important` }}>
        <Box>
          <div>
            <Typography variant='h4'> Nurses Blood Test Check-in w/ Nurse Josie Smith</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }} p={2}>
              16th September 2023, 11:30am
            </Typography>
            <LinearProgress
              value={100}
              color='info'
              variant='determinate'
              sx={{
                height: 2,
                '&.MuiLinearProgress-colorInfo': { backgroundColor: 'primary.main' },
                '& .MuiLinearProgress-bar': {
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 0
                }
              }}
            />
          </div>
        </Box>
        <Box>
          <div>
            <p> Duration: 30 min </p>
            <p> 12345 16th Street, Vancouver BC, V4K V4K </p>
          </div>
        </Box>
        {/*
        <Box sx={{ gap: 2, mb: 5, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              Sales Overview
            </Typography>
            <Typography variant='h4'>$42.5k</Typography>
          </div>
          <Typography sx={{ fontWeight: 500, color: 'success.main' }}>+18.2%</Typography>
        </Box>
        <Box sx={{ mb: 3.5, gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ py: 2.25, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 1.5, height: 24, width: 24 }}>
                <Icon icon='tabler:shopping-cart' fontSize='1.125rem' />
              </CustomAvatar>
              <Typography sx={{ color: 'text.secondary' }}>Order</Typography>
            </Box>
            <Typography variant='h5'>62.2%</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              6,440
            </Typography>
          </Box>
          <Divider flexItem sx={{ m: 0 }} orientation='vertical'>
            <CustomAvatar
              skin='light'
              color='secondary'
              sx={{ height: 24, width: 24, fontSize: '0.6875rem', color: 'text.secondary' }}
            >
              VS
            </CustomAvatar>
          </Divider>
          <Box sx={{ py: 2.25, display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
            <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 1.5, color: 'text.secondary' }}>Visits</Typography>
              <CustomAvatar skin='light' variant='rounded' sx={{ height: 24, width: 24 }}>
                <Icon icon='tabler:link' fontSize='1.125rem' />
              </CustomAvatar>
            </Box>
            <Typography variant='h5'>25.5%</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              12,749
            </Typography>
          </Box>
        </Box>
        <LinearProgress
          value={65}
          color='info'
          variant='determinate'
          sx={{
            height: 2,
            '&.MuiLinearProgress-colorInfo': { backgroundColor: 'primary.main' },
            '& .MuiLinearProgress-bar': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }
          }}
        />
        */}
      </CardContent>
    </Card>
  )
}

export default AnalyticsOrderVisits

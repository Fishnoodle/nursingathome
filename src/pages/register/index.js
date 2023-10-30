// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** React Imports + New MUI
import * as React from 'react'
import { FormControl, FormLabel, MenuItem, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio'
import InputLabel from '@mui/material/InputLabel'

// ** DatePicker component Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

// ** Styled Components
import { Select } from '@mui/base/Select'

import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'

const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 600,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  // ** Radio Button - Marital Status
  const [value, setValue] = useState('married')

  const handleChangeMarital = event => {
    setValue(event.target.value)
  }

  // ** DatePicker
  const date = new Date().toLocaleDateString
  const [dob, setDob] = useState(dayjs(date))

  // ** Calcualtes age
  var month_diff = Date.now() - dob.$d.getTime()
  var age_dt = new Date(month_diff)
  var year = age_dt.getUTCFullYear()
  var age = Math.abs(year - 1970)

  // ** Height (Feet and Inches Values)
  const feet_value = [3, 4, 5, 6, 7, 8]

  const inches_value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <Box
      className='content-center'
      sx={{
        backgroundColor: 'background.paper'
      }}
    >
      <Box>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 750 }}>
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 1.5 }}>
                Patient Intake Form
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Please fill in the information below correctly</Typography>
            </Box>
            <FormControl noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                Basic Information
              </Divider>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Patient First Name'
                    placeholder='First Name'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Patient Last Name'
                    placeholder='Last Name'
                  />
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label='Date of Birth' value={dob} onChange={dob => setDob(dob)} />
                    <Typography> Age: {(age = age || 0)}</Typography>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Care Card #' placeholder='999999999' />
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ mb: 4 }} variant='outlined'>
                    <OutlinedInput
                      id='outlined-adornment-weight'
                      endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
                      aria-describedby='outlined-weight-helper-text'
                      inputProps={{
                        'aria-label': 'weight'
                      }}
                    />
                    <FormHelperText id='outlined-weight-helper-text'>Weight</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Email' placeholder='johnsmith@email.com' />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Home Address'
                    placeholder='1234 Smith Street'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Postal Code' placeholder='153 VGA' />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Phone Number (Home)'
                    placeholder='(604) 123-4567'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Phone Number (Cell)'
                    placeholder='(778) 123-4567'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Family Doctor'
                    placeholder='Dr. John Smith'
                  />
                </Grid>
              </Grid>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                Medical Information
              </Divider>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                Social History
              </Divider>
              <FormControl>
                <FormLabel>Marital Status (please choose one)</FormLabel>
                <RadioGroup row name='marital-status' value={value} onChange={handleChangeMarital}>
                  <FormControlLabel value='married' control={<Radio />} label='Married' />
                  <FormControlLabel value='single' control={<Radio />} label='Single' />
                  <FormControlLabel value='common-law' control={<Radio />} label='Common Law' />
                  <FormControlLabel value='divorced' control={<Radio />} label='Divorced' />
                </RadioGroup>
              </FormControl>

              <Grid item xs={6}>
                <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Occupation' placeholder='Job Title' />
              </Grid>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                Account Login & Password
              </Divider>
              <CustomTextField fullWidth label='Email' sx={{ mb: 4 }} placeholder='user@email.com' />
              <CustomTextField
                fullWidth
                label='Password'
                id='auth-login-v2-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                sx={{ mb: 4, mt: 1.5, '& .MuiFormControlLabel-label': { fontSize: theme.typography.body2.fontSize } }}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'text.secondary' }}>I agree to</Typography>
                    <Typography component={LinkStyled} href='/terms' sx={{ ml: 1 }}>
                      privacy policy & terms
                    </Typography>
                  </Box>
                }
              />
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Already have an account?</Typography>
                <Typography component={LinkStyled} href='/login'>
                  Sign in instead
                </Typography>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register

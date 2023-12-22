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

// ** React Imports + New MUI
import * as React from 'react'
import { Dialog, DialogTitle, FormControl, FormLabel, MenuItem, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio'
import InputLabel from '@mui/material/InputLabel'

// ** DatePicker component Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

// ** Terms and Conditoins Import
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Slide from '@mui/material/Slide'

// ** Styled Components
import { Select } from '@mui/base/Select'

import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import axios from 'axios'

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

  const Register = () => {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: ''
    })

    const handleChange = e => {
      const { name, value } = e.target
      setUser({
        ...user, //spread operator
        [name]: value
      })
    }
  }

  //register function
  const egister = () => {
    const { name, email, password } = user
    if (name && email && password) {
      axios.post
    }
  }

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const role = 'Doctor'

  //MERN Stack - Register API
  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        role
      })
    })

    const data = await response.json()

    if (data.status === 'ok') {
      window.location.href = '/doctorlogin'
    }
  }

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
                Registration Form - MONGODB IN TESTING
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Please fill in the information below correctly</Typography>
            </Box>
            <form onSubmit={registerUser}>
              <FormControl noValidate autoComplete='off' onSubmit={registerUser}>
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

                {/* Patient First and Last Name */}
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <CustomTextField
                      autoFocus
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                      label='First Name'
                      placeholder='First Name'
                      name='first_name'
                      value={firstname}
                      onChange={e => setFirstname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTextField
                      autoFocus
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                      label='Last Name'
                      placeholder='Last Name'
                      name='last_name'
                      value={lastname}
                      onChange={e => setLastname(e.target.value)}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12}>
                    <CustomTextField
                      autoFocus
                      required
                      fullWidth
                      sx={{ mb: 4 }}
                      label='Email'
                      placeholder='johnsmith@email.com'
                      name='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      fullWidth
                      label='Password'
                      sx={{ mb: 4 }}
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
                      name='password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Button fullWidth type='submit' value='Register' variant='contained' sx={{ mb: 4 }}>
                  Sign up
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', mr: 2 }}>Already have an account?</Typography>
                  <Typography component={LinkStyled} href='/doctorlogin'>
                    Sign in instead
                  </Typography>
                </Box>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register

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

  // ** Radio Button = Gender
  const [gender, setGender] = useState('invalid')

  const handleChangeGender = genderevent => {
    setGender(genderevent.target.value)
  }

  // ** Radio Button - Marital Status
  const [marital, setMarital] = useState('invalid')

  const handleChangeMarital = maritalevent => {
    setMarital(maritalevent.target.value)
  }

  // ** Radio Button - Alcohol Use
  const [alcohol, setAlcohol] = useState('invalid')

  const handleChangeAlcohol = alcohol => {
    setAlcohol(alcohol.target.value)
    if (alcohol.target.value == 'yes') {
      console.log('VISIBILITY Al')
    } else {
      console.log('REMOVE VISIBILITY Al')
    }
  }

  // ** Radio Button - Cigarette Use
  const [cigarette, setCigarette] = useState('invalid')

  const handleChangeCigarette = cigarette => {
    setCigarette(cigarette.target.value)
    if (cigarette.target.value == 'yes') {
      console.log('VISIBILITY Cg')
    } else {
      console.log('REMOVE VISIBILITY Cg')
    }
  }

  // ** Radio Button - Recreational Drug Use
  const [drug, setDrug] = useState('invalid')

  const handleChangeDrug = drug => {
    setDrug(drug.target.value)
    if (drug.target.value == 'yes') {
      console.log('VISIBILITY Dr')
    } else {
      console.log('REMOVE VISIBILITY Dr')
    }
  }

  // ** Past History checkbox
  const [state, setState] = useState({
    bloodClots: false,
    tuberculosis: false,
    asthma: false,
    thyroidDisease: false,
    migraineHeadcahes: false,
    seizures: false,
    digestiveIssues: false,
    fractures: false,
    anemia: false,
    heartDisease: false,
    diabetes: false,
    cancer: false,
    hepatitis: false,
    hiv: false,
    other: false
  })

  const handleChangeHistory = historyevent => {
    setState({
      ...state,
      [historyevent.target.name]: historyevent.target.checked
    })
  }

  const {
    bloodClots,
    tuberculosis,
    asthma,
    thyroidDisease,
    migraineHeadcahes,
    seizures,
    digestiveIssues,
    fractures,
    anemia,
    heartDisease,
    diabetes,
    cancer,
    hepatitis,
    hiv,
    other
  } = state

  // ** Vaccine checkbox
  const [vaccines, setVaccines] = useState({
    pneumovax: false,
    tdap: false,
    shingles: false,
    flu: false,
    vaccine: false,
    covid: false
  })

  const handleChangeVaccines = vaccines => {
    setVaccines({
      ...state,
      [vaccines.target.name]: vaccines.target.checked
    })
  }

  const { pneumovax, tdap, shingles, flu, vaccine, covid } = state

  // ** DatePicker
  const date = new Date().toLocaleDateString
  const [dob, setDob] = useState(dayjs(date))

  // ** Calcualtes age
  var month_diff = Date.now() - dob.$d.getTime()
  var age_dt = new Date(month_diff)
  var year = age_dt.getUTCFullYear()
  var age = Math.abs(year - 1970)

  // ** lbs to kg calculator (vice-versa)

  // ** Height (Feet and Inches Values)
  const feet_value = [3, 4, 5, 6, 7, 8]
  const [feet, setFeet] = useState('invalid')

  const handleChangeFeet = feetevent => {
    setValue(feetevent.target.value)
  }

  const inches_value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  // ** Terms and Condition
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
  })

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const terms_dialog1 =
    "I give FOREMED Family Physicians or it's assignees the authority to review my medication list on Medinet/Pharmanet and obtain relevant medical records from other healthcare providers/institutions."

  const terms_dialog2 =
    'I understand that after-hours emergencies need to be taken care of in the Emergency Room and that if I need urgent medical care I need to go to a walk-in clinic or the Emergency room.'

  const terms_dialog3 =
    'I will not compound multiple medical issues in an appointment as this leads to poor care and not enough time to discuss issues appropriately. I will make an agenda with my doctor for all my issues at the start of the appointment.'

  const terms_dialog4 =
    'I am responsible for ALL test results. I will make separate follow-up appointments to discuss all test results with the doc.'

  const terms_dialog5 =
    'I understand that 24-hour notice is required for appointment cancellation, otherwise, I will be responsible for the payment of a cancellation fee ($50 charge) prior to my next visit. Any overdue fees must be paid prior to seeing the doctor. I understand that if I have 3 no-shows to this office we have the right to close your file.'

  const terms_dialog6 =
    'I agree to email, text, and telehealth communication and understand that my info can be intercepted and sent/used by another individual in harmful ways.'

  const terms_dialog7 =
    'Patients acknowledge that they may occasionally be assessed and treated by a medical learned (i.e. resident/nurse practitioner student) as this is a clinic involved in training future health care providers.'

  const terms_dialog8 =
    'I agree to Respect the Clinic staff and refrain from any form of verbal or physical aggression or harassment.'

  const terms_dialog9 =
    'A positive therapeutic relationship relies on mutual trust and respect between the patient and the doctor/staff. If this foundation is lost, a productive therapeutic relationship may no longer be possible, and either the patient or the doctor may choose to terminate this doctor-patient relationship which will involve the patient seeking medical care elsewhere.'

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
                  />
                </Grid>
              </Grid>

              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }} onClick='#'>
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

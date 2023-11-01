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
  }

  // ** Radio Button - Cigarette Use
  const [cigarette, setCigarette] = useState('invalid')

  const handleChangeCigarette = cigarette => {
    setCigarette(cigarette.target.value)
  }

  // ** Radio Button - Recreational Drug Use
  const [drug, setDrug] = useState('invalid')

  const handleChangeDrug = drug => {
    setDrug(drug.target.value)
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
                    label='Patient First Name'
                    placeholder='First Name'
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    label='Patient Last Name'
                    placeholder='Last Name'
                  />
                </Grid>

                {/* Gender */}
                <Grid item xs={12}>
                  <FormControl required>
                    <FormLabel>Gender (pleaes choose one)</FormLabel>
                    <RadioGroup row name='gender' value={gender} onChange={handleChangeGender}>
                      <FormControlLabel value='male' control={<Radio />} label='Male' />
                      <FormControlLabel value='female' control={<Radio />} label='Female' />
                      <FormControlLabel value='other' control={<Radio />} label='Other' />
                      <FormControlLabel value='prefer-no-to-say' control={<Radio />} label='Prefer not to say' />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Height (Feet & Inches) */}

                {/* Email */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    required
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Email'
                    placeholder='johnsmith@email.com'
                  />
                </Grid>

                {/* Carecard */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    required
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Care Card #'
                    placeholder='999999999'
                  />
                </Grid>

                {/* Weight (kg) */}
                <Grid item xs={6}>
                  <FormControl sx={{ mb: 4 }} required variant='outlined'>
                    <OutlinedInput
                      id='kg_lbs_calc'
                      endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
                      aria-describedby='outlined-weight-helper-text'
                      inputProps={{
                        'aria-label': 'weight'
                      }}
                    />
                    <FormHelperText id='outlined-weight-helper-text'>Weight</FormHelperText>
                  </FormControl>
                </Grid>

                {/* Weight (lbs) */}
                <Grid item xs={6}>
                  <FormControl sx={{ mb: 4 }} variant='outlined'>
                    <OutlinedInput
                      id='lbs_kg_calc'
                      endAdornment={<InputAdornment position='end'>lbs</InputAdornment>}
                      aria-describedby='outlined-weight-helper-text'
                      inputProps={{
                        'aria-label': 'weight'
                      }}
                    />
                  </FormControl>
                </Grid>

                {/* Date of Birth + Age */}
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker required label='Date of Birth' value={dob} onChange={dob => setDob(dob)} />
                    <Typography> Age: {(age = age || 0)}</Typography>
                  </LocalizationProvider>
                </Grid>

                {/* Address */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    label='Home Address'
                    placeholder='1234 Smith Street'
                  />
                </Grid>

                {/* Postal Code */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    required
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Postal Code'
                    placeholder='153 VGA'
                  />
                </Grid>

                {/* Phone Number (Home) */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    label='Phone Number (Home)'
                    placeholder='(604) 123-4567'
                  />
                </Grid>

                {/* Phone Number (Cell) */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    label='Phone Number (Cell)'
                    placeholder='(778) 123-4567'
                  />
                </Grid>

                {/* Family Doctor */}
                <Grid item xs={6}>
                  <CustomTextField
                    autoFocus
                    fullWidth
                    required
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

              <Grid container spacing={6}>
                {/* Allergies */}
                <Grid item xs={6}>
                  <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Medication' placeholder='List' />
                </Grid>

                <Grid item xs={6}>
                  <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Reation' placeholder='List' />
                </Grid>
              </Grid>

              {/* Current Medication/s & Dosages */}
              <FormControl item xs={12}>
                <FormLabel>Current Medication/s & Dosages</FormLabel>
                <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} placeholder='Medication | Dosage : Xmg' />
              </FormControl>

              {/* Past Medical History Checklist */}
              <Grid container spacing={2}>
                <FormControl>
                  <FormLabel>Please check the ones that applicable to your Past Medical History:</FormLabel>
                  <Grid container direction='row' justifyContent='center' alignItems='center'>
                    <FormControlLabel
                      control={<Checkbox checked={bloodClots} onChange={handleChangeHistory} name='bloodClots' />}
                      label='Blood Clots'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={tuberculosis} onChange={handleChangeHistory} name='tuberculosis' />}
                      label='Tuberculosis'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={asthma} onChange={handleChangeHistory} name='asthma' />}
                      label='Asthma'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={thyroidDisease} onChange={handleChangeHistory} name='thyroidDisease' />
                      }
                      label='Thyroid Disease'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={migraineHeadcahes} onChange={handleChangeHistory} name='migraineHeadcahes' />
                      }
                      label='Migraine Headaches'
                    />
                  </Grid>
                  <Grid container direction='row' justifyContent='center' alignItems='center'>
                    <FormControlLabel
                      control={<Checkbox checked={seizures} onChange={handleChangeHistory} name='seizures' />}
                      label='Seizures'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={digestiveIssues} onChange={handleChangeHistory} name='digestiveIssues' />
                      }
                      label='Digestive Issues'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={fractures} onChange={handleChangeHistory} name='fractures' />}
                      label='Fractures'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={anemia} onChange={handleChangeHistory} name='anemia' />}
                      label='Anemia'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={heartDisease} onChange={handleChangeHistory} name='heartDisease' />}
                      label='Heart Disease'
                    />
                  </Grid>

                  <Grid container direction='row' justifyContent='center' alignItems='center'>
                    <FormControlLabel
                      control={<Checkbox checked={diabetes} onChange={handleChangeHistory} name='diabetes' />}
                      label='Diabetes'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={cancer} onChange={handleChangeHistory} name='cancer' />}
                      label='Cancer'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={hepatitis} onChange={handleChangeHistory} name='hepatitis' />}
                      label='Hepatitis'
                    />
                    <FormControlLabel
                      control={<Checkbox checked={hiv} onChange={handleChangeHistory} name='hiv' />}
                      label='HIV'
                    />
                  </Grid>
                  <FormControlLabel
                    control={<Checkbox checked={other} onChange={handleChangeHistory} name='other' />}
                    label='Other'
                  />
                </FormControl>

                {/* Vaccines Checklist*/}
                <Grid container spacing={2}>
                  <FormControl>
                    <FormLabel>Vaccines - checkmart if have recieved</FormLabel>
                    <Grid container direction='row' justifyContent='center' alignItems='center'>
                      <FormControlLabel
                        control={<Checkbox checked={pneumovax} onChange={handleChangeHistory} name='pneumovax' />}
                        label='Pneumovax'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={tdap} onChange={handleChangeHistory} name='tdap' />}
                        label='TDAP'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={shingles} onChange={handleChangeHistory} name='shingles' />}
                        label='Shingles'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={flu} onChange={handleChangeHistory} name='flu' />}
                        label='Flu'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={vaccine} onChange={handleChangeHistory} name='vaccine' />}
                        label='Vaccine'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={covid} onChange={handleChangeHistory} name='covid' />}
                        label='Covid'
                      />
                    </Grid>
                  </FormControl>
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
                Social History
              </Divider>

              {/* Marital Status Radio Button */}
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Marital Status (please choose one)</FormLabel>
                  <RadioGroup row name='marital-status' value={marital} onChange={handleChangeMarital}>
                    <FormControlLabel value='married' control={<Radio />} label='Married' />
                    <FormControlLabel value='single' control={<Radio />} label='Single' />
                    <FormControlLabel value='common-law' control={<Radio />} label='Common Law' />
                    <FormControlLabel value='divorced' control={<Radio />} label='Divorced' />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Occupation */}
              <Grid item xs={12}>
                <CustomTextField autoFocus fullWidth sx={{ mb: 4 }} label='Occupation' placeholder='Job Title' />
              </Grid>

              {/* Alcohol Use */}
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Alcohol Use</FormLabel>
                  <RadioGroup row name='alcohol-use' value={alcohol} onChange={handleChangeAlcohol}>
                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                    <FormControlLabel value='no' control={<Radio />} label='No' />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Cigarette Use */}
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Cigarette Use</FormLabel>
                  <RadioGroup row name='cigarette-use' value={cigarette} onChange={handleChangeCigarette}>
                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                    <FormControlLabel value='no' control={<Radio />} label='No' />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Recreational Drugs */}
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Recreational Drugs</FormLabel>
                  <RadioGroup row name='drug-use' value={drug} onChange={handleChangeDrug}>
                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                    <FormControlLabel value='no' control={<Radio />} label='No' />
                  </RadioGroup>
                </FormControl>
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

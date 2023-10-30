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
import { FormControl, FormLabel, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio'

// ** Styled Components
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

const Terms = () => {
  // ** Hooks
  const theme = useTheme()

  return (
    <Box
      className='content-center'
      sx={{
        backgroundColor: 'background.paper'
      }}
    >
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
            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I give FOREMED Family Physicians or it's assignees the authority to review my medication list on
              Medinet/Pharmanet and obtain relevant medical records from other healthcare providers/institutions.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I understand that after-hours emergencies need to be taken care of in the Emergency Room and that if I
              need urgent medical care I need to go to a walk-in clinic or the Emergency room.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I will not compound multiple medical issues in an appointment as this leads to poor care and not enough
              time to discuss issues appropriately. I will make an agenda with my doctor for all my issues at the start
              of the appointment.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I am responsible for ALL test results. I will make separate follow-up appointments to discuss all test
              results with the doc.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I understand that 24-hour notice is required for appointment cancellation, otherwise, I will be
              responsible for the payment of a cancellation fee ($50 charge) prior to my next visit. Any overdue fees
              must be paid prior to seeing the doctor. I understand that if I have 3 no-shows to this office we have the
              right to close your file.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I agree to email, text, and telehealth communication and understand that my info can be intercepted and
              sent/used by another individual in harmful ways.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              Patients acknowledge that they may occasionally be assessed and treated by a medical learned (i.e.
              resident/nurse practitioner student) as this is a clinic involved in training future health care
              providers.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              I agree to Respect the Clinic staff and refrain from any form of verbal or physical aggression or
              harassment.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              A positive therapeutic relationship relies on mutual trust and respect between the patient and the
              doctor/staff. If this foundation is lost, a productive therapeutic relationship may no longer be possible,
              and either the patient or the doctor may choose to terminate this doctor-patient relationship which will
              involve the patient seeking medical care elsewhere.
            </Typography>
          </Box>
          <Button variant='contained' href='/register'>
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
Terms.getLayout = page => <BlankLayout>{page}</BlankLayout>
Terms.guestGuard = true

export default Terms

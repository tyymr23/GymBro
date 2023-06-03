import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/RedLogoName.png'
import { BorderBottom } from '@mui/icons-material'

//add GitHub link to bottom of footer

const Footer = () => (
  <Box mt='80px' bgcolor='#FFF3F4'>
    <Stack gap='40px' sx={{alignItems: 'center'}} flexWrap='wrap' px='40px' pt='24px'>
      <img src={Logo} alt='logo' style={{width: '200px', height: '41px'}}/>
    </Stack>
    <Typography variant='h1' sx={{fontSize: {lg: '18px', xs: '15px'}}} mt='41px' textAlign='center' pb='40px'>
        Made with React by <a href='https://github.com/tyymr23' target='_blank' style={{color: '#FF2625'}}>Ty Robertson</a>
    </Typography>
  </Box>
  )

export default Footer
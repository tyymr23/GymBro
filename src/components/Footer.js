import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

//add GitHub link to bottom of footer

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#FFF3F4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px'/>
        <Typography variant='h5' pb='40px' mt='20px'>
            Made with React by Ty Robertson
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
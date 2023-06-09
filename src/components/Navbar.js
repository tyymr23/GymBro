import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material' //stack from Material UI

import Logo from '../assets/images/RedLogo.png'

const Navbar = () => { //change logo in stack to desired, call Logo, find better color scheme
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm: '123px', xs: '40px'}, mt: {sm: '32px', xs: '20px'},
    justifyContent: 'none'}} px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '70px', height: '60px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontFamily='Alegreya'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to='/' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
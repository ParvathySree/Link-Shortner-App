import { AppBar, Box } from '@mui/material'
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <AppBar position="static" sx={{background:'#FBF9EE',boxShadow:'none'}}>
        <Box className="header">
        Shortify.
        </Box>
    </AppBar>
  )
}

export default Header
import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './Main.css'
import UrlInput from './UrlInput/UrlInput';
import CopyToClipboard from './CopyToClipboard/CopyToClipboard';
const Main = () => {
  return (
    <Box>
        <Box className="main-content">
        <Typography className='heading'>Shorten Your Looooooong Links :{")"}</Typography>
        <Typography className='sub-txt'>Shortify is an easy-to-use URL shortening service. Please enter your long URL below.</Typography>
        <Box>
            <UrlInput/>
        </Box>
        <Box>
          <CopyToClipboard/>
        </Box>
        </Box>
    </Box>
  )
}

export default Main
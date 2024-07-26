import { Box, IconButton, Paper,InputBase, Button } from '@mui/material'
import React from 'react'
import './UrlInput.css'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useContext } from 'react';
import { LinkContext } from '../../../Context/LinkContext';
import axios from 'axios';

const UrlInput = () => {
  const {originalLink,setOriginalLink,setShortLink} =useContext(LinkContext)
  const handleChange = (e) => {
    setOriginalLink(e.target.value)
  }

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/get-url', {
        originalURL: originalLink,
      });
      setShortLink(response.data.data.shortUrl)
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ p: '20px 0'}}>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',borderRadius:'10px',border : '1px solid #216C17'}}
      
    >
         <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
        <InsertLinkIcon />
      </IconButton>
      <InputBase
          sx={{
            ml: 1,
            flex: 1,
            '& .MuiInputBase-input::placeholder': {
              color: '#000', 
            },
          }}
          value={originalLink}
          placeholder="Enter the URL here"
          fullWidth
          onChange = {handleChange}
        />
        <Button sx={{color : '#216C17',fontWeight:700}} onClick={handleClick}>Go</Button>
    </Paper>
    </Box>
  )
}

export default UrlInput
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Paper, Tooltip } from '@mui/material';
import './CopyToClipboard.css'
import { LinkContext } from '../../../Context/LinkContext';
const CopyToClipboard = () => {
    const [copied, setCopied] = useState(false);
    const {shortLink} =useContext(LinkContext)

    const handleCopy = async () => {
        
        try {
          await navigator.clipboard.writeText(shortLink);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); 
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };
  


  return (
    <Paper sx={{height:'100px'}} className="copy-box">
        <Box  sx={{p:'20px'}}>
            {shortLink}
        </Box>
        <Tooltip title="Copy to clipboard">
        <Button onClick={handleCopy} sx={{minWidth:'30px'}}><ContentCopyIcon sx={{height:'20px',color:'#216C17'}}/></Button>
        </Tooltip>
    </Paper>
  )
}

export default CopyToClipboard
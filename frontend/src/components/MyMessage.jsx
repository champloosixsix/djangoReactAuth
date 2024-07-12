import React from 'react'
import { Box } from '@mui/material'

const MyMessage = ({ text, color }) => {
  return (
    <div>
        <Box sx={{backgroundColor:color, color:'#FFFFFF', width: '100%', height: '100px', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
            {text}
        </Box>
    </div>
  )
}

export default MyMessage
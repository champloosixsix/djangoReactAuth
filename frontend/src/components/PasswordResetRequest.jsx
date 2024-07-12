import { React, useState } from 'react'
import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/myPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import MyMessage from './MyMessage'

const PasswordResetRequest = () => {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()
    const [showMessage, setShowMessage] = useState(false)
    const submission = (data) => {
      AxiosInstance.post(`api/password_reset/`,{
        email: data.email,
      }).then((response) => {
        setShowMessage(true)
      })
    }
  return (
    <div className={'myBackground'}>

    <form onSubmit={handleSubmit(submission)}>
    


    <Box className={'whiteBox'}>
      <Box className={'itemBox'}>
        <Box className={'title'}>Reset Password</Box>
      </Box>
      <Box className={'itemBox'}>
        <MyTextField 
        label={'Email'} 
        name={'email'}
        control={control} 
        required={true} />
      </Box>
      <Box className={'itemBox'}>
        <MyButton 
        label={'Request Reset'}
        type={'submit'}
         />
      </Box>
      <Box className={'itemBox'} sx={{flexDirection:'column'}}>
      {showMessage ? <MyMessage text="If the email is valid, an email has been sent with a link to reset your password." />  : null}
      </Box>
    </Box>
    </form>
  </div>
  )
}

export default PasswordResetRequest
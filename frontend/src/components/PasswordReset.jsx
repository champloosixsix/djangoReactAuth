import { React, useState } from 'react'
import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/myPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import MyMessage from './MyMessage'

const PasswordReset = () => {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()
    const [showMessage, setShowMessage] = useState(false)
    const {token} = useParams()
    console.log(token)
    const submission = (data) => {
      AxiosInstance.post(`api/password_reset/confirm/`,{
        password: data.password,
        token: token,
      }).then((response) => {
        setShowMessage(true)
        setTimeout(() => {
          navigate('/')
        }, 2000)
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
        <MyPassField 
            label={'Password'}
            name={'password'}
            control={control} 
            required={true}
        />
      </Box>
      <Box className={'itemBox'}>
        <MyPassField 
            label={'Confirm Password'}
            name={'password2'}
            control={control} 
            required={true}
        />
      </Box>
      <Box className={'itemBox'}>
        <MyButton 
        label={'Reset Password'}
        type={'submit'}
         />
      </Box>
      <Box className={'itemBox'} sx={{flexDirection:'column'}}>
      {showMessage ? <MyMessage text="Your password reset was $$$, you will now be redirected" color={'#69C9AB'} />  : null}
      </Box>
    </Box>
    </form>
  </div>
  )
}

export default PasswordReset
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

const Login = () => {

  const navigate = useNavigate()
  const { handleSubmit, control } = useForm()
  const [error, setError] = useState(false)
  const submission = (data) => {
    AxiosInstance.post(`login/`,{
      email: data.email,
      password: data.password,
    }).then((response) => {
      console.log(response)
      localStorage.setItem('Token', response.data.token)
      navigate(`/home`)
    })
    .catch((error) => {
      setError(true)
      console.log('Error during login', error)
    })
  }

  return (
    <div className={'myBackground'}>
      <form onSubmit={handleSubmit(submission)}>
      <Box className={'whiteBox'}>
        <Box className={'itemBox'}>
          <Box className={'title'}>App Login</Box>
        </Box>
        <Box className={'itemBox'}>
          <MyTextField 
          label={'Email'} 
          name={'email'}
          control={control} 
          required={true} />
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
          <MyButton 
          label={'Login'}
          type={'submit'}
           />
        </Box>
        <Box className={'itemBox'}>
        { error ? <MyMessage text = {"Login failed :( Try again, or reset your password."} color = {'#EC5A76'} /> : null}
        </Box>
        <Box className={'itemBox'} sx={{flexDirection:'column'}}>
          <Link to={'/register'}>Register</Link>
          <Link to={'/request/password_reset'}>Forgot Password?</Link>
        </Box>
      </Box>
      </form>
    </div>
  )
}

export default Login
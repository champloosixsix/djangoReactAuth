import React from 'react'
import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/myPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Register = () => {
  const navigate = useNavigate()
  const schema = yup.object({
    email: yup.string().email('Enter a valid email.').required('Email required'),
    password: yup.string().required('Password required').min(8, 'Password must be atleast 8 characters.')
    .matches(/[A-Z]/, 'Password must contain atleast 1 uppercase letter')
    .matches(/[a-z]/, 'Password must contain atleast 1 lowercase letter')
    .matches(/[0-9]/, 'Password must contain atleast 1 number')
    .matches(/[!@#$%^&*]/, 'Password must contain atleast 1 special character (!@#$%^&*)'),
    password2: yup.string().required('Confirm password').oneOf([yup.ref('password'),null],'Passwords must match')
  })
  const { handleSubmit, control } = useForm({resolver: yupResolver(schema)})
  const submission = (data) => {
    AxiosInstance.post(`register/`,{
      email: data.email,
      password: data.password,
    }).then(() => {
      navigate(`/`)
    })
  }
  return (
    <div className={'myBackground'}>
      <form onSubmit={handleSubmit(submission)}>
      <Box className={'whiteBox'}>
        <Box className={'itemBox'}>
          <Box className={'title'}>New Registration</Box>
        </Box>
        <Box className={'itemBox'}>
          <MyTextField 
          label={'Email'}
          name={'email'} 
          control={control} 
          />
        </Box>
        <Box className={'itemBox'}>
          <MyPassField 
          label={'Password'} 
          name={'password'}
          control={control}
          />
        </Box>
        <Box className={'itemBox'}>
          <MyPassField 
          label={'Confirm Password'} 
          name={'password2'}
          control={control}
          />
        </Box>
        <Box className={'itemBox'}>
          <MyButton 
          label={'Register'}
          type={'submit'}
          />
        </Box>
        <Box className={'itemBox'}>
          <Link to={'/'}>Already Registered? Login</Link>
        </Box>
      </Box>
      </form>
    </div>
  )
}

export default Register
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

export default function MyPassField(props) {
    const {label, name, control} = props
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <Controller
      name = {name}
      control = {control}
      render = {({
        field: { onChange, value },
        fieldState: { error },
        formState,
    }) =>(
      <FormControl variant="outlined" className="myForm">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange = {onChange}
            value = {value}
            error = {!!error}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
          <FormHelperText sx={{color:"#D32F2F"}}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )
    
  }
  />
/*          */
  );
}

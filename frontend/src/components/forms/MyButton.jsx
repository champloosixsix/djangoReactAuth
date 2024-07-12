import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButtons(prop) {
    const {label, type} = prop
  return (
      <Button type={type} variant="contained" className="myButton">{label}</Button>
  );
}
import React from 'react'
import * as C from './styles';

// eslint-disable-next-line react/prop-types
const Input = ({type, placeholder, value, onChange}) => {
  return (
   <C.Input
   value ={value}
   onChange = {onChange}
   type={type}
    placeholder = {placeholder}
   />
   
  )
}

export default Input;
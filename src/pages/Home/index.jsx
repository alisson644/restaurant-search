import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';


import logo from '../../assets/logo.svg'

import {Container, Search } from './styles'

export default () =>{
  const[inputValue, SetInputValue] = useState('');

  return(
  <Container>
    <Search>
      <img src={logo} alt="Logo restaurante"/>
      <TextField
        label="Pesquisar"
        outlined
      >
      <Input
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      />
      </TextField>
    </Search>
  </Container>
  )
} ;

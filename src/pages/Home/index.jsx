import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import {Container, Search, Logo, Wrapper, Map, CarrouselTitle, Carrousel } from './styles'

export default () =>{
  const [inputValue, SetInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return(
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo restaurante"/>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
          <Input
            value={inputValue}
            onChange={(e) => SetInputValue(e.target.value)}
          />
          </TextField>
          <CarrouselTitle>Na sua Área</CarrouselTitle>
          <Carrousel {...settings}>
            <Card photo={restaurante} title="Restaurante 1" />
            <Card photo={restaurante} title="Restaurante 2"/>
            <Card photo={restaurante} title="Restaurante 3"/>
            <Card photo={restaurante} title="Restaurante 4"/>
            <Card photo={restaurante} title="Restaurante 5"/>
            <Card photo={restaurante} title="Restaurante 6"/>
            <Card photo={restaurante} title="Restaurante 7 "/>
          </Carrousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)} />
    </Wrapper>
  )
} ;

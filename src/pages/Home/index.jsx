import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {useSelector} from 'react-redux';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import {Container, Search, Logo, Wrapper, CarrouselTitle, Carrousel } from './styles'

export default () =>{
  const [inputValue, SetInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const restaurants = useSelector((state) => state.restaurants.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter'){
      setQuery(inputValue);
    }
  }

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
            onKeyPress={handleKeyPress}
            onChange={(e) => SetInputValue(e.target.value)}
          />
          </TextField>
          <CarrouselTitle>Na sua Área</CarrouselTitle>
          <Carrousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
            ))}
          </Carrousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)} />
    </Wrapper>
  )
} ;

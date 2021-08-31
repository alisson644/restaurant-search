import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {useSelector} from 'react-redux';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import {Container, Search, Logo, Wrapper, CarrouselTitle, Carrousel, ModalTitle, ModalContent } from './styles'

export default () =>{
  const [inputValue, SetInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [ placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const restaurantSelect  = useSelector((state) => state.restaurants.restaurantSelect);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

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
          {restaurants ? (
            <>
            <CarrouselTitle>Na sua Área</CarrouselTitle>
            <Carrousel {...settings}>
              {restaurants && restaurants.map((restaurant) => (
                <Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
              ))}
            </Carrousel>
            </ >
          ) : (
            <Loader />
          )
        }
        </Search>
        {restaurants && restaurants.map((restaurant) => (
          <RestaurantCard onClick={()=> handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}>
        {restaurantSelect ? (
          <>
            <ModalTitle>{restaurantSelect?.name}</ModalTitle>
            <ModalContent>{restaurantSelect?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelect?.formatted_address}</ModalContent>
            <ModalContent>{restaurantSelect?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado :('}</ModalContent>
          </>
        ) :(
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )
      }
      </Modal>
    </Wrapper>
  )
} ;

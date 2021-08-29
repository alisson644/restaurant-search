import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'

export default ()=> (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
      <Address>Rua dos bobos número 0</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto restaurante"/>
  </Restaurant>
  );
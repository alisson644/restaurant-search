import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import Skeleton from '../Skeleton';

export default ({restaurant, onClick})=> {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
  <Restaurant onClick={onClick} key={restaurant.place_id} >
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto  
    imageLoaded={imageLoaded}
    src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
    onLoad={()=> setImageLoaded(true)}
    alt="Foto restaurante"/>
    {!imageLoaded && <Skeleton width="100%"  height="100%" />}
  </Restaurant>
  )};
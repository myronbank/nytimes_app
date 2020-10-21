import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = ({ image, title, abstract, date, path }) => {

  image = image === null ? "" : image[0].url;
  return (

    <CardItem
      src={image}
      title={title}
      text={abstract}
      date={date}
      path={path}
    />
  );
}

export default Cards;

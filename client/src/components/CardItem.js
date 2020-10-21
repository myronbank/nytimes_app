import React from 'react';

function CardItem(props) {
  return (
    <React.Fragment>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='article image'
              src={props.src}
            />
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
            <p className="cards__item__text">{props.text}</p>
            <span>{props.date}</span>
          </div>
        </a>
      </li>
    </React.Fragment>
  );
}

export default CardItem;

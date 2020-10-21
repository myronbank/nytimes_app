import React from 'react';
import Cards from './Cards';

const NYTimesCards = ({ articles }) => {
  return (
    <React.Fragment>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {articles.map(art =>
                <Cards image={art.multimedia}
                  title={art.title}
                  abstract={art.abstract}
                  date={art.published_date.split("T").splice(0, 1)}
                  path={art.short_url}
                  genre={art.section}
                />)}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NYTimesCards;
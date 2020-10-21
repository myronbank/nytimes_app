import React from 'react';
import "./SortButton.css";

const Pagination = ({ genres, onClick }) => {
  return (
    <React.Fragment>
      <div className="tab sticky">
        <div className="tab--container">
          {genres && genres.map(genre => {
            return <button onClick={onClick} key={genre} className="tablinks">{genre}</button>
          })}
        </div></div>
    </React.Fragment >)
}

export default Pagination;
import React, { useEffect, useState } from 'react';

const StarRating = ({productRating}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(()=>{
    if(typeof productRating === 'number'){
        setRating(productRating);
    }
  },[productRating])

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <svg
              className="bi bi-star-fill"
              width="1em"
              height="1em"
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.396.198-.812-.149-.746-.592l.83-4.73-3.523-3.356c-.328-.312-.158-.888.283-.95l4.898-.696 2.086-4.233c.18-.364.678-.364.858 0l2.086 4.233 4.898.696c.441.063.611.638.283.95l-3.523 3.356.83 4.73c.066.443-.35.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

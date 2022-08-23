import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import './Rating.css';

const Rating = () => {

const rates = [1, 2, 3, 4, 5];

  return (
    <div className='rating-container'>
        {rates.map(rate =>{
           return <FaRegStar className='fa-reg-star'/>
        })}
    </div>
  )
}

export default Rating;
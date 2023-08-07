import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';


const Stars = ({ ratings }) => {
    const ratinsStars = Array.from({ length: 5 }, (ele, index) => {
   
        let numberDes = index + 0.5;
        return (
            <span key={index}>
                {ratings.rate > index + 1 ? (<FaStar className='text-[#ff6000]' />) : ratings.rate >= numberDes ? (<FaStarHalfAlt className='text-[#ff6000]' />) : (<AiOutlineStar className='text-[#ff6000] text-[20px]' />)}
            </span>
        )
    })

return(
  <div className='flex'>
    {ratinsStars}
  </div>
)
}
export default Stars;
import React from 'react'
import tshirt from '../../assets/t-shirt.jpg'
import redtshirt from '../../assets/redtshirt.jpg'
function Tshirt() {
  let imageData=[
    {id:1,img:tshirt},
    {id:2,img:redtshirt}
  ]
  console.log(imageData)
  return (
    <div className='container'>
      <div className='main-t-shirt-box'>
        <div>
          <img src={tshirt} className='max-w-[500px]' alt="" />
          <img src={redtshirt} className='max-w-[500px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tshirt
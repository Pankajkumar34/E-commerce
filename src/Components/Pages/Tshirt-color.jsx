import React from 'react'
import tshirt from '../../assets/t-shirt.jpg'
import redtshirt from '../../assets/redtshirt.jpg'
import ReactImageMagnify from 'react-image-magnify';
function Tshirt() {
  let imageData = [
    { id: 1, img: tshirt },
    { id: 2, img: redtshirt }
  ]
  console.log(imageData)
  return (
    <div className='container'>
      <div className='main-t-shirt-box'>
        <div className='w-[400px] my-6'>
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'T_shirt',
              isFluidWidth: true,
              src:tshirt
            },
            largeImage: {
              src: tshirt,
              width: 1000,
              height: 1100
            }
          }} />
         
        </div>
      </div>
    </div>
  )
}

export default Tshirt
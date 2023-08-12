import React, { useState } from 'react'
import men1 from '../../assets/men1j.jpg'

import ReactImageMagnify from 'react-image-magnify';
import { useLottie } from 'lottie-react';
import OfferSale from '../Lottie/offerSale2.json';
import bannerGirl from '../../assets/bannergirl.png';

function Tshirt() {
  const [selectImg,setSelectImg]=useState('')
  let TShirt = [
    { id: 1, img: men1 },
    { id: 2, img: men1 },
    { id: 3, img:men1 },
    { id: 4, img: men1 },
  ]

  const options = {
    animationData: OfferSale,
    loop: true
  };

  const { View } = useLottie(options);


  return (
    <div className='container'>
      <div className=' sm:block main-t-shirt-box flex  justify-around'>
        <div className=' w-[100%] my-6 shadow shadow-black p-2 bg-cover h-[500px] '  style={{backgroundImage:`url(${bannerGirl})`}}>
          <div className='max-w-[500px]'>
            {View}
          </div>
          {/* <div className='w-[400px] m-auto relative z-[9999] '>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'T_shirt',
                isFluidWidth: true,
                src:!selectImg?men1:selectImg
              },
              largeImage: {
                src: !selectImg?men1:selectImg,
                width: 1000,
                height: 1100

              }
            }} />
            <div  className=' tshirt-single w-[300px] flex gap-2  mt-4 '>
              {
                TShirt?.map((items, index) => {
                  return (
                    <div key={index} className='imgType' >
                      <img src={items.img} className="max-w-[80px] shadow shadow-black p-2" alt="" onClick={()=>setSelectImg(items.img)} />
                    </div>
                  )
                })
              }
            </div>
          </div> */}

        </div>

        
      </div>

      {/* // banner dow */}

     
    </div>
  )
}

export default Tshirt
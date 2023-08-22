import React from 'react'
import FeatureProduct from './featureProduct';
import Bgimg from '../../assets/bgimg.jpg';
function Shop() {
  return (
    <>
        <section className=' sm:h-[30vh] bg-cover bg-center  bg-no-repeat  mt-[90px]'  style={{ backgroundImage: `url(${Bgimg})` }}>
        <div className="container">
          <div className="flex">
            <div className="sm:h-[265px] sm:pl-[50px] pl-[60px] banner-details  w-[100%] h-[600px] flex flex-col justify-center ">
              <span>Trade in offer !!</span>
              <h1 className='sm:text-[22px] text-[41px] text-[#ff6000] font-extrabold'>Super value Deals</h1>
              <p className='sm:text-[22px] text-[32px] pb-6'>On all products</p>
              <span>Save more today with Apenck</span>
          
            </div>
          </div>
        </div>

      </section>
      <section >
        <div className="container">
          <div className="mainproduct mt-[90px]">
            <FeatureProduct />
          </div>
        </div>
      </section>
    </>
   
  )
}

export default Shop
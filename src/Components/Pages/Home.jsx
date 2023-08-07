import React from 'react'
import Bgimg from '../../assets/bgimg.jpg';
import Icons from './Icons';
import FeatureProduct from './featureProduct';
function Home() {
 
  return (
    <>
      <section className='banner mt-[90px]'>
        <div className="container">
          <div className="flex">
            <div className=" pl-[60px] banner-details bg-cover bg-no-repeat bg-center w-[100%] h-[600px] flex flex-col justify-center " style={{ backgroundImage: `url(${Bgimg})` }}>
              <span>Trade in offer !!</span>
              <h1 className='text-[41px] text-[#ff6000] font-extrabold'>Super value Deals</h1>
              <p className='text-[32px] pb-6'>On all products</p>
              <span>Save more today with Apenck</span>
              <button className='border bg-[#2b3d4c] p-5 w-[150px] rounded-[10px] my-6 items-center text-white'>Shop Now</button>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className='container'>
          <Icons />
        </div>
      </section>
      <section >
<div className="container">
  <div className="mainproduct">
    <FeatureProduct/>
  </div>
</div>
      </section>
    </>
  )
}

export default Home
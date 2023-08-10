import React from 'react'
import Bgimg from '../../assets/slidegir.jpg';
import Bgimg1 from '../../assets/slidegirl1.jpg';
import Icons from './Icons';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularProduct from './PopularProduct';
import Tshirt from './Tshirt-color';

function Home() {
  const navigate = useNavigate()
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrow: true,
    infinite: true,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const GotShop = () => {
    navigate('/Shop')
    alert("ppp")
  }
  return (
    <div className='mainpage mt-[94px] overflow-hidden'>


      <Slider {...settings} >

          <div className='banner1 bg-cover ' >

            <div className="container">
              <div className="flex">
                <div className=" pl-[60px] banner-details  w-[100%] h-[500px] flex flex-col justify-center ">
                  <span>Trade in offer !!</span>
                  <h1 className='text-[41px] text-[#ff6000] font-extrabold'>Super value Deals</h1>
                  <p className='text-[32px] pb-6'>On all products</p>
                  <span>Save more today with Apenck</span>
                  <button className='border bg-[#2b3d4c] p-5 w-[150px] rounded-[10px] my-6 items-center text-white' onClick={() => navigate('/Shop')}>By Now</button>
                </div>
              </div>
            </div>

          </div>


        <div className='banner bg-cover ' >

          <div className="container">
            <div className="flex">
              <div className=" pl-[60px] banner-details  w-[100%] h-[500px] flex flex-col justify-center ">
                <span>Trade in offer !!</span>
                <h1 className='text-[41px] text-[#ff6000] font-extrabold'>Super value Deals</h1>
                <p className='text-[32px] pb-6'>On all products</p>
                <span>Save more today with Apenck</span>
                <button className='border bg-[#2b3d4c] p-5 w-[150px] rounded-[10px] my-6 items-center text-white' onClick={() => navigate('/Shop')}>By Now</button>
              </div>
            </div>
          </div>

        </div>



      </Slider>

      <section>
        <div className='container'>
          <Icons />
          <PopularProduct />

        </div>
      </section>
      <section>
      <Tshirt/>
      </section>

    </div>
  )
}

export default Home
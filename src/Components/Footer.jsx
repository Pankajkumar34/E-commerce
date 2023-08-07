import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Playstore from './PayAppLogo/playstore.jpg';
import Apple from './PayAppLogo/apple.jpg';
import Paypal from './PayAppLogo/paypal.png';
function Footer() {
  return (
    <footer className='Footer-main bg-[#c3dacc86]'>
      <div className="container">
        <div className="grid grid-cols-4">
          <div className="">
            <h3 className='py-4'><b>Contact</b></h3>
            <div>
              <p className='py-3'><b>Address:</b>Chandigarh Mohali sector 72</p>
              <p className='py-3 '><b>Phone:</b><a className='text-[rgb(83,113,233)]' href="tel:+24544245545"> call us : 24544245545</a></p>
              <b>follow the developer</b>
              <div className='social-icons flex gap-2 py-2'>
                <Link><p><AiFillTwitterCircle /></p></Link>
                <Link> <p><BsFacebook /></p></Link>
                <Link> <p><BsInstagram /></p></Link>
                <Link> <p><BsGithub /></p></Link>
                <Link> <p><BsLinkedin /></p></Link>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className='py-4'><b>About</b></h3>
            <div>
              <p className='py-3'>About Us</p>
              <p className='py-3'>Delivery</p>
              <p className='py-3'>Privacy Policy</p>
              <p className='py-3'>Terms & Conditions</p>
              <p className='py-3'>Free policy</p>

            </div>
          </div>

          <div className="">
            <h3 className='py-4'><b>Account</b></h3>
            <div>
              <p className='py-2'>Profile</p>
              <p className='py-2'>Vew Cart</p>
              <p className='py-2'>Help</p>
              <p className='py-2'>Payments</p>
              <p className='py-2'>My wishlist</p>
              <p className='py-2'>Coupons</p>


            </div>
          </div>

          <div className="">
            <h3 className='py-4'><b>Install App</b></h3>
            <div>
              <p className='py-3 text-[14px]'>Available On Google Play Store Service && App Store</p>

            </div>
            <div>
              <Link ><img className='border border-black my-3' src={Playstore} alt="" /></Link>
              <Link >< img className='border border-black my-3' src={Apple} alt="" /></Link>
              <span>Payment Mathods</span>
              <Link > <img className='border border-black p-1' src={Paypal} alt="" /></Link>
             
            </div>
            

          </div>
        </div>
        <hr className='my-5 border border-black'/>
        <div className='flex justify-between h-[100px]'>
          <div>
            <p>&#169;  Developed by Pankaj Kumar Kushwaha 2023</p>
          </div>
          <div className='text-[rgb(83,113,233)]' >
            <Link>Privacy Policy</Link>
            <Link className='px-5'>trems of use</Link>
            <Link>Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
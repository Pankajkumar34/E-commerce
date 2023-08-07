import React,{useState,useEffect} from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/apn.png';
import {useSelector} from 'react-redux'

function Header() {
    const countCart=useSelector((state)=>{
     return state.data.cartCont
    })
    const [headerTop, seHeaderTop] = useState(false)
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        seHeaderTop(true)
      } else {
        seHeaderTop(false)
      }
    }
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

    return (
        <>
            <header className=' sm:hidden Header-top '>
                <div className="container">
                    <div className='grid grid-cols-3 items-center p-1'>
                        <div className='topheader'>
                            <p>The treading outfits at 100% off</p>
                        </div>
                        <div className='topheader-r w-full flex justify-end text-[rgb(83,113,233)]'>
                            <a href="tel:+2457865438" className='flex items-center gap-1 underline text-blue-500'><BiPhoneCall />call us +2457865438</a>
                        </div>
                        <div className='flex w-full justify-end'>
                            <Link><BiPhoneCall className='text-[20px] mx-4 text-blue-500' /></Link>
                            <Link> <AiOutlineMail className='text-[20px] mx-4 text-blue-500' /></Link>

                        </div>
                    </div>
                </div>
            </header>
            <header className={` ${!headerTop?"sm:top-0 top-[32px]":"top-0"} header-upper fixed left-0 right-0 `} >
                <div className="container">
                    <div className='flex items-center'>
                        <div className="sm:w-[50%] logo w-[10%] mr-3">
                            <Link to='/'><img src={Logo} alt="Logo" className='max-w-[100%] h-[45px]' /></Link>
                        </div>
                        <div className='sm:hidden w-[30%]'>
                            <form>
                                <span>All</span>
                                <input type="text" className='border p-1' />
                                <button className='border p-1 rounded'>Search</button>
                            </form>

                        </div>
                        <div className='sm:hidden flex items-center gap-[50px] uppercase w-[40%] '>
                            <Link className='text-black' to={'/'}>Home</Link>
                            <Link className='text-black' to={'Shop'}>Shop</Link>
                            <Link className='text-black' to={'Blog'}>Blog</Link>
                            <Link className='text-black' to={'About'}>About</Link>
                            <Link className='text-black' to={'Contact'}>Contact</Link>
                        </div>
                        <div className='sm:hidden flext items-center justify-center gap-[1.75rem] w-[20%] flex text-[rgb(83,113,233)]'>
                            <Link  to={'Wishlist'} className='mr-2 flex flex-col items-center'>
                                <HiOutlineInboxIn />
                                <span className='text-center'>Wishlist</span>
                            </Link>

                            <Link to={'Login'} className='flex flex-col items-center'>
                                <VscAccount />
                                <span>Account</span>
                            </Link>
                            <div className='relative'>
                            <Link to={'Cart'} className='mr-1 flex flex-col items-center'>
                                < CgShoppingCart/>
                                <span>Cart</span>
                                <p className='cartCount '>{countCart}</p>
                            </Link>
                            </div>
                            
                        </div>
                        <div className='w-[50%] '>
                            <span className='sm:block hidden text-end'>{<FaBars/>}</span>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
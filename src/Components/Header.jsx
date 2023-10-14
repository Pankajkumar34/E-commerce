import React, { useState, useEffect } from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../assets/Key.png';
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
    

    const { loginWithPopup, user, logout, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const saveuserData = () => {
        localStorage.setItem("userId", user.email)
        localStorage.setItem("sub", user.sub)
        localStorage.setItem("updated_at", user.updated_at)
    }
  



    const countCart = useSelector((state) => {
        return state.data.cartCont
    })
    const [headerTop, seHeaderTop] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            seHeaderTop(true)
        } else {
            seHeaderTop(false)
        }
    }
    useEffect(() => {
        if (isAuthenticated) {
            saveuserData()
        }
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    },[])

    return (

        <header className=' Header-top relative z-[999999] '>
            <div className="container">
                <div className='sm:hidden grid grid-cols-3 items-center p-1'>
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

                <div className={` ${!headerTop ? "sm:top-0 top-[32px]" : "top-0"} header-upper fixed left-0 right-0 `} >
                    <div className='container'>


                        <div className='sm:justify-around flex items-center '>
                            <div className="sm:w-[50%] logo w-[20%] mr-3">
                                <Link to='/'><img src={Logo} alt="Logo" className='max-w-[100%] w-[100px] m-[-22px]' /></Link>
                            </div>

                            <div className='sm:hidden flex items-center gap-[50px] uppercase w-[60%] '>
                                <NavLink className='text-black' to={'/'}>Home</NavLink>
                                <NavLink className='text-black' to={'Shop'}>Shop</NavLink>
                                <NavLink className='text-black' to={'Blog'}>Blog</NavLink>
                                <NavLink className='text-black' to={'About'}>About</NavLink>
                                <NavLink className='text-black' to={'Contact'}>Contact</NavLink>
                            </div>
                            <div className='sm:block   hidden  '>
                                {<FaBars className='fabars w-[100%] text-end' />}
                                {/* <div className=' relative'>
                                    <Link to={'Cart'} className='mr-1 flex flex-col items-center'>
                                        < CgShoppingCart />

                                        <p className='cartCount '>{countCart}</p>
                                    </Link>
                                </div> */}
                            </div>
                            <div className='sm:hidden flext items-center justify-center gap-[1.75rem] w-[20%] flex text-[rgb(83,113,233)]'>
                                <Link to={'Wishlist'} className='mr-2 flex flex-col items-center'>
                                    <HiOutlineInboxIn />

                                </Link>

                    
                                <div className=' relative'>
                                    <Link to={'Cart'} className='mr-1 flex flex-col items-center'>
                                        < CgShoppingCart />

                                        <p className='cartCount '>{countCart}</p>
                                    </Link>
                                </div>
                                <Link  className='flex flex-col items-center'>
                                  { isAuthenticated?
                                  <>
                                  <img src={user.picture} alt={user.name} className='w-[30px] rounded-[100%]' style={{border:isAuthenticated?"2px solid #fcb041":"2px solid red"}}/> <span className='siginbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</span>
                                  </>:<><VscAccount  className='w-[30px]'/> <span className='siginbtn' onClick={loginWithPopup} >Login</span></>} 

                                </Link>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header
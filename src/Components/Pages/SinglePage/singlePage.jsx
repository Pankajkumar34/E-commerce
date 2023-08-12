import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import Paypal from '../../PayAppLogo/paypal.png';
import { Link } from "react-router-dom";
import Stars from "../stars";
const SinglePage = () => {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const fetchApi = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response?.json()
        setItems(data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    console.log(items
        , "ll")
    return (
        <div className="container">

            {items.length == 0 ? "" :
                <div className="main-singleProduct py-[150px]">
                    <div className="sm:block product_image_box flex gap-2">
                        <div className="product_image border p-2">
                            <div className=" w-[400px]">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'T_shirt',
                                    isFluidWidth: true,
                                    src:items.image,
                                    width:400,
                                    height:400

                                },
                                
                                largeImage: {
                                    src:items.image,
                                    width: 1400,
                                    height: 1500
                                    
                                }
                            }} />

                            </div>
                     
                            {/* <img src={items.image} className="sm:max-w-[200px] max-w-[400px] " alt="" /> */}
                        </div>
                        <div className="infoProduct ">
                            <div className="w-[60%] m-auto">
                                <h1><b>{items.title}</b></h1>
                                <p>category: <b>{items.category}</b></p>
                                <p>Rs: <b>{items.price}</b></p>
                                <Stars ratings={items.rating} />
                                <button className="border p-2 my-5 rounded bg-[#2b3d4c] text-white ">Buy Now</button>
                                <div className="dsec">
                                    <p>{items.description}</p>
                                    <Link > <img className='border border-black p-1 my-2' src={Paypal} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            }



        </div>
    )
}
export default SinglePage;

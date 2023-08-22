import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { AddProduct } from '../../features/productsSlice';

import Stars from './stars';

function featureProduct() {
    const [product, setProduct] = useState([])
    const [checkDubbleCart, setDubbleCart] = useState([])
    const dispatch = useDispatch()


    // API hit here 
    const productsFetch = () => {
        const Url = "https://fakestoreapi.com/products"
        fetch(Url).then(res => {
            res.json().then(res2 => {
                if (res2) {
                    setProduct(res2)
                    console.log("data fetched successfully")
                } else {
                    console.log("data not found")
                }
            })

        })
    }
    const AddTOcart = (id) => {
        if (!checkDubbleCart.includes(id)) {
            const cartdata = product?.find(item => item?.id === id);
    
            if (cartdata) {
                setDubbleCart([...checkDubbleCart, id]);
                dispatch(AddProduct(cartdata));
               
            }
        } else {
            alert("Product is already in the cart.");
        }
    }
    

    useEffect(() => {
        productsFetch()
    }, [])
    return (
        <div className='maiCard'>
            <div className='container'>
                <div className=' sm:grid-cols-2 sm:gap-0 grid grid-cols-4 place-items-center justify-center gap-3'>
                    {
                        product?.map((items, id) => {

                            return (
                                <div key={id} className="sm:w-[92%] submain flex justify-center  border m-2 w-[80%] p-2">
                                    <div>
                                        <img src={items.image} alt="" className=' sm:max-w-[150px] sm:h-[150px] m-auto max-w-[200px] h-[200px]' />
                                        <div className='w-full'>
                                            <span><b>{items.title.slice(0, 30)}</b></span>
                                            <p>Rs: <b>{items.price}</b></p>
                                            <Stars ratings={items.rating} />

                                        </div>
                                        <div className='flex justify-center bg-[#2b3d4c] w-full my-2 text-white p-2 rounded'>

                                            <button className='' onClick={() => AddTOcart(items.id)}>Add To Cart</button>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default featureProduct;
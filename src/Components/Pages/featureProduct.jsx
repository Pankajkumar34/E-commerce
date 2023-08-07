import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { AddProduct } from '../../features/productsSlice';

import Stars from './stars';

function featureProduct() {
    const [product, setProduct] = useState([])
    const [checkDubbleCart,setDubbleCart]=useState([])
    const dispatch = useDispatch()
    

    // API hit here 
    const productsFetch = () => {
        const Url = "https://fakestoreapi.com/products?sort=desc"
        fetch(Url).then(res => {
            res.json().then(res2 => {
                if (res2) {
                    setProduct(res2)
                    console.log(res2)
                } else {
                    console.log("data not found")
                }
            })

        })
    }

    const AddTOcart = (id) => {
        
        const cartdata = product.find((items, index) => {
            return items.id === id
        })
        setDubbleCart([...checkDubbleCart,cartdata])
        
            dispatch(AddProduct(cartdata))
        
       
    }
 
    useEffect(() => {
        productsFetch()
    }, [])
    return (
        <div className='maiCard'>
            <div className='container'>
                <div className='grid grid-cols-4 place-items-center justify-center gap-3'>
                    {  
                       product?.map((items, id) => {

                            return (
                                <div key={id} className="submain flex justify-center  border m-2 w-[80%] p-2">
                            <div>
                                        <img src={items.image} alt="" className='m-auto max-w-[200px] h-[200px]' />
                                        <div className='w-full'>
                                            <span><b>{items.title.slice(0, 30)}</b></span>
                                            <p>price: <b>{items.price}</b></p>
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
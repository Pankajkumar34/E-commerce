import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddProduct, toggleDropDown } from '../../features/productsSlice';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function PopularProduct() {
    const [product, setProduct] = useState([])
    const [category, setcategory] = useState('')
    const [checkDubbleCart, setDubbleCart] = useState([])
    const dispatch = useDispatch()
    const reduxToggle = useSelector((state) => {
        return state.data
    })
    console.log(reduxToggle,"oooo")

    // API hit here 
    const productsFetch = () => {


        const Url = `https://fakestoreapi.com/products/category/${category ? category : "electronics"}`
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
        setDubbleCart([...checkDubbleCart, cartdata])

        dispatch(AddProduct(cartdata))

    }

    useEffect(() => {
        productsFetch()
    }, [category])

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='maiCard mt-[40px]'>
                <div className='container'>
                    <div className=' category  flex items-center justify-between'>
                        <h2 className=' sm:text-[20px] popularProductheading '>Popular Products</h2>
                        <div className='sm:block sm:relative flex gap-3  '>
                            <div className='sm:block sm:px-2  hidden '>
                                <h2 className='sm:border sm:w-[180px] text-center p-2 rounded bg-[#2b3d4c] text-white ' onClick={() => dispatch(toggleDropDown(!reduxToggle.toggle))}>Category</h2>
                            </div>
                            <div className='sm:w-[180px]  sm:absolute  sm:right-0 text-center mx-2  bg-[#2b3d4c]  rounded-md' style={{display:!reduxToggle.toggle ?"none":"block"}}>
                                <button className='sm:bg-inherit sm:border-none sm:text-white  border p-2 rounded bg-[#2b3d4c] text-white ' onClick={() => setcategory("electronics")}>Electronics</button>
                                <button className=' sm:bg-inherit sm:border-none sm:text-white   border p-2  rounded bg-[#2b3d4c] text-white ' onClick={() => setcategory("jewelery")}>jewelery</button>
                                <button className='sm:bg-inherit sm:border-none sm:text-white   border p-2  rounded bg-[#2b3d4c] text-white ' onClick={() => setcategory("men's clothing")}>men's clothing</button>
                                <button className='sm:bg-inherit sm:border-none sm:text-white   border p-2  rounded bg-[#2b3d4c] text-white ' onClick={() => setcategory("women's clothing")}>women's clothing</button>
                            </div>

                        </div>
                    </div>

                    <div className='sm:grid sm:grid-cols-2 sm:place-items-center popularProduct flex'>
                        {
                            product.slice(0, 4)?.map((items, index) => {
                                return (
                                    <div key={index} className="submain border sm:m-2 m-[50px] w-[80%] h-[400] p-2">
                                        <div>
                                            <img src={items.image} alt="" className='sm:max-w-[100px] sm:h-[100px] m-auto max-w-[200px] h-[200px]' />
                                            <div className='w-full text-center my-[20px]'>
                                                <span><b>{items.title.slice(0, 30)}</b></span>
                                                <p>Rs: <b>{items.price}</b></p>


                                            </div>
                                            {/* <div className='flex justify-center bg-[#2b3d4c] w-full my-2 text-white p-2 rounded'>

                                                <button className='' onClick={() => AddTOcart(items.id)}>Add To Cart</button>
                                            </div> */}

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>


                </div>

            </div>

        </>

    )
}

export default PopularProduct;
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddProduct, toggleDropDown } from '../../features/productsSlice';
import { useNavigate } from 'react-router-dom';
function PopularProduct() {
    const [product, setProduct] = useState([])
    const [category, setcategory] = useState('')
    const [checkDubbleCart, setDubbleCart] = useState([])
    const dispatch = useDispatch()
    const reduxToggle = useSelector((state) => {
        return state.data
    })
    console.log(reduxToggle, "oooo")
    const navigate=useNavigate()

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

  const SingleProductId=(id)=>{
    navigate(`product/${id}`)
  }
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
                            <div className='categoryBtn ' style={{ display: !reduxToggle.toggle ? "none" : "block" }}>
                                <button className='categoryBtn_button ' onClick={() => setcategory("electronics")}>Electronics</button>
                                <button className='categoryBtn_button' onClick={() => setcategory("jewelery")}>jewelery</button>
                                <button className='categoryBtn_button' onClick={() => setcategory("men's clothing")}>men's clothing</button>
                                <button className='categoryBtn_button' onClick={() => setcategory("women's clothing")}>women's clothing</button>
                            </div>

                        </div>
                    </div>

                    <div className='sm:grid sm:grid-cols-1 sm:place-items-center justify-center popularProduct grid grid-cols-2'>
                        {
                            product.slice(0, 4)?.map((items, index) => {
                                return (
                                    <div key={index} className="submain border rounded sm:m-2 m-[10px] w-[90%]  p-2">
                                        <div className='flex'>
                                            <img src={items.image} alt="" className='sm:max-w-[100px] sm:h-[100px] m-auto max-w-[200px] h-[200px]' />
                                            <div className='w-full text-center my-[20px]'>
                                                <span><b>{items.title.slice(0, 30)}</b></span>
                                                <p>category: <b>{items.category}</b></p>
                                                <p>Rs: <b>{items.price}</b></p>
                                                <button className='bg-[#2b3d4c] text-white border p-1 rounded ' onClick={()=>SingleProductId(items.id)}>Buy Now</button>

                                            </div>


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
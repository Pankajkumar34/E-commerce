import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, deleteProduct, QutyIncrement } from '../../features/productsSlice';
import { useNavigate } from 'react-router-dom';
// import { Increment } from '../../features/QuantitySlice';

function Cart() {
  const dispatch = useDispatch() // dispatch
  const navigate = useNavigate()
  const [checkItems, setCheckItems] = useState('')
  const [Quantity, setQuantity] = useState(1)

  // increment decrement
  const QuantityCount = (id, operator) => {

    dispatch(QutyIncrement([id, operator]))

  }
  // increment decrement end

  // redux selectors//
  const carData = useSelector((state) => {
    return state.data
  })

  console.log(carData, "cart")


  return (
    <div className='container'>
      <div className="maincart text-center mt-[90px] my-3">
        <div className='bg-[#2b3d4c] rounded h-[100px] flex items-center justify-center'>
          <h2 className='font-bold text-white  '>Your <span>Shopping Cart</span></h2>
        </div>
        {
          carData?.dataProducts.length < 1 ?
            <>
              <h1 className='text-[30px] font-extrabold my-[10px]'>Your Cart Empty </h1>
              <button onClick={() => navigate('/shop')} className='border p-2 rounded bg-[#2b3d4c] text-white '><b>Shop Now</b></button>
            </>
            : <div>

              <table className=' w-full'>
                <thead>
                  <tr>
                    <th className='text w-[40%]'>Items</th>
                    <th className="">Price</th>
                    <th className="">Quantity</th>
                    <th className="">Total</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {
                    carData?.dataProducts?.map((items, index) => {

                      return (

                        <tr className='border rounded ' key={index}>
                          <td >
                            <div className='flex items-center p-2 gap-3'>

                              <img src={items.image} alt="" className='max-w-[200px] h-[200px]' />
                              <div>
                                <p>{items.title}</p>
                                <button className='border p-2 bg-[#2b3d4c] rounded text-white' onClick={() => dispatch(deleteProduct(items.id))}>Remove</button>
                              </div>

                            </div>
                          </td>

                          <td> <p><b>Rs : {items.price} </b></p></td>
                          <td>

                            <span className='border p-2 cursor-pointer' onClick={() => QuantityCount(items.id, "Decrement")}>-</span>
                            <span className='border p-2 cursor-pointer' >{items.Quantity}</span>
                            <span className='border p-2 cursor-pointer' onClick={() => QuantityCount(items.id, "Increment")}>+</span>

                          </td>

                          <td >
                            <span>Rs:  {Math.ceil(items.Quantity * items.price)}</span> <br />
                            <button className='border p-2 rounded bg-[#2b3d4c]  text-white w-[87px]'>Buy</button>
                          </td>

                        </tr>

                      )

                    })

                  }
                </tbody>

              </table>
              <div className='text-left'>
                <button className='border p-2 my-[9px] mx-[15px] rounded bg-[#2b3d4c]  text-white w-[115px] ' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
              </div>
            </div>
        }


      </div>
    </div>
  )
}

export default Cart

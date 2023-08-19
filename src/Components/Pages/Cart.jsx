import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../features/productsSlice';
import { useNavigate } from 'react-router-dom';
import { Increment } from '../../features/QuantitySlice';

function Cart() {
  const dispatch = useDispatch() // dispatch
  const navigate = useNavigate()
  const [checkItems,setCheckItems]=useState('')
  // increment decrement
  const QuantityCount = (id,operator) => {
    setCheckItems(id)
    dispatch(Increment([id,operator]))
  }
  // increment decrement end

  // redux selectors//
  const carData = useSelector((state) => {
    return state.data
  })

  const QuantityItems = useSelector((state) => {
    return state.itemsqty
  })


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
              <button onClick={() => navigate('/')} className='border p-2 rounded bg-[#2b3d4c] text-white '><b>Shop Now</b></button>
            </>
            :
            <table className=' w-full'>
              <thead>
                <tr>
                  <th className='w-[40%]'>Items</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  carData?.dataProducts?.map((items, index) => {
                    return (
                      <tr className='border px-3' key={index}>
                        <td >
                          <div className='flex items-center p-2 gap-3'>

                            <img src={items.image} alt="" className='max-w-[200px] h-[200px]' />
                            <div>
                              <p>{items.title}</p>
                              <button className='border p-2' onClick={() => dispatch(deleteProduct(items.id))}>Remove</button>
                            </div>

                          </div>

                        </td>
                        <td> <p><b>Rs : {items.price} </b></p></td>
                        <td>
                          <span className='border p-2 cursor-pointer' onClick={() => QuantityCount(items.id, "Decrement")}>-</span>
                          <span className='border p-2 cursor-pointer' >{QuantityItems.value}</span>
                          <span className='border p-2 cursor-pointer' onClick={() => QuantityCount(items.id, "Increment")}>+</span></td>

                        <td >
                          <span>Rs:  {Math.ceil(QuantityItems.value * items.price)}</span> <br />
                          <button className='border p-2 rounded'>Buy</button>
                        </td>



                      </tr>


                    )

                  })

                }
              </tbody>

            </table>
        }


      </div>
    </div>
  )
}

export default Cart

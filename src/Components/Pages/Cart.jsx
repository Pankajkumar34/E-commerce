import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../features/productsSlice'
function Cart() {
  const dispatch = useDispatch()
  const carData = useSelector((state) => {
    return state.data.dataProducts
  })

  return (
    <div className='container'>
      <div className="maincart text-center mt-[90px]">
        <div>
          <h2 className='font-bold'>Your Product</h2>
        </div>
        {
          carData?.map((items, index) => {
            console.log("kkk", items)
            if (items) {
              return (
                <div className='flex justify-between items-center my-4 border p-2' key={index}>
                  <div>
                    <img src={items.image} alt="" className='max-w-[200px] h-[200px]' />
                  </div>
                  <div>
                    <p><b>{items.title}</b></p>
                    <p><b>{items.id}</b></p>
                  </div>
                  <div>
                    <button className='border p-2' onClick={() => dispatch(deleteProduct(items.id))}>Remove</button>
                  </div>
                </div>

              )
            } else {
              return (
                <h1>not data</h1>
              )
            }


          })
        }

      </div>
    </div>
  )
}

export default Cart

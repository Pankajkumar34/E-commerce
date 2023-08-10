import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
function Icons() {
    const iconsArr = [
        {
            img: icon1,
            title:"fast Order"
        },
        {
            img: icon2,
            title:"Quik shipping"
        },
        {
            img: icon3,
            title:"High Saves"
        },
        {
            img: icon4,
            title:"24/7 Support"
        },
        {
            img: icon5,
            title:"Online Orders"
        },

    ]
    return (
        <div className='sm:grid sm:grid-cols-2 sm:px-2 sm:gap-1   flex justify-between text-center'>
            {
                iconsArr?.map((items, id) => {
                    return (
                   
                    <div key={id} className='border py-3 my-3 px-3'>
                        <img className='w-[60px] m-auto' src={items.img} alt="" />
                        <p>{items.title}</p>
                    </div>
                    
                    )
                })
            }
        </div>
    )
}

export default Icons

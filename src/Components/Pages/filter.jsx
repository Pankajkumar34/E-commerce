import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { HiMiniMicrophone } from 'react-icons/hi2';
import { searchItems } from "../../Utils/searchItems";
import { AddSearchItems } from "../../features/ItemsSlice";
import { useDispatch } from "react-redux";
const Filter = () => {
    const dispatch = useDispatch()
    const [desc, setDesc] = useState('')

    const items_get = async () => {
        const sendDescvalue = await searchItems(`${desc}`)
        if (sendDescvalue) {
            dispatch(AddSearchItems(sendDescvalue))
           
        } else {
            console.log("not found")
        }

    }

    return (
        <>
            <div className="main-filter bg-[#2b3d4c] py-4 px-3 rounded text-white">
                <div className="container">
                    <div className="sub-filter flex justify-around items-center">
                        <div className="filter-btn">
                            <h3>Filter</h3>
                        </div>
                        <div className="searchbox relative">

                            <input type="text" placeholder="Search Items.." value={desc} onChange={(e) => setDesc(e.target.value)} className=" sm:w-[154px] text-black p-[10px] rounded w-[400px]" />

                            <div className="bg-gray-500 absolute top-0 right-0 bottom-0 p-[10px] gap-3 flex text-white">
                                <span onClick={items_get} className="pt-[4px]  ">
                                    <FiSearch />

                                </span>
                                <span className="  pt-[4px] ">
                                    <HiMiniMicrophone />
                                </span>
                            </div>
                            
                              
                            

                        </div>

                        <div className="products-size">
                            <span className="mx-3">
                                Grid
                            </span>
                            <span>
                                List
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter;

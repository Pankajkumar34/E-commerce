import React, { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { HiMiniMicrophone } from 'react-icons/hi2';
import { BiSolidMicrophoneOff } from 'react-icons/bi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { searchItems } from "../../Utils/searchItems";
import { AddSearchItems } from "../../features/ItemsSlice";
import { useDispatch } from "react-redux";
import useSpeechToText from 'react-hook-speech-to-text';
const Filter = () => {
    const dispatch = useDispatch()
    const [desc, setDesc] = useState('')
    const { error, interimResult,startSpeechToText,stopSpeechToText, isRecording, } = useSpeechToText({
        speechRecognitionProperties: {
          lang: 'en-IN',
          interimResults: true, // Allows for displaying real-time speech results
          continuous: true,
        useLegacyResults: false
        }
      });
    
      console.log([interimResult])

  
    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
    const items_get = async () => {
        const sendDescvalue = await searchItems(`${desc}`)
        if (sendDescvalue) {
            dispatch(AddSearchItems(sendDescvalue))

        } else {
            console.log("not found")
        }

    }



    const array = [12, 50, 70, 56, 82, 700, 460, 78, 78, 150]
    array.map((ele) => {
        if (ele > 0 && ele < 100) {

            return ele

        } else {
            return null
        }
    })



    return (
        <>
            <div className="main-filter bg-[#2b3d4c] py-4 px-3 rounded text-white">
                <div className="container">
                    <div className="sub-filter flex justify-between items-center">
                        <div className="filter-btn">
                            Filter :  <select className="text-black rounded">
                                <option >All </option>
                                <option value="value">0 to 20</option>
                                <option value="value">20 to 50</option>
                                <option value="value">50 to 100</option>
                                <option value="value">100 to 200</option>
                            </select>
                        </div>
                        <div className="searchbox relative">

                            <input type="text" placeholder="Search Items.." value={interimResult} onChange={(e) => setDesc(e.target.value)} className=" sm:w-[154px] text-black p-[10px] rounded w-[400px]" />

                            <div className="bg-gray-500 absolute top-0 right-0 bottom-0 p-[10px] gap-3 flex text-white">
                                <span onClick={items_get} className="pt-[4px]  ">
                                    <FiSearch />

                                </span>
                                <span className="  pt-[4px] ">
                                    <button onClick={isRecording? stopSpeechToText : startSpeechToText }>
                                        {isRecording ? <HiMiniMicrophone /> : <BiSolidMicrophoneOff />}
                                    </button>
                                </span>
                            </div>

                        </div>

                        <div className="products-size flex">
                            <span className="mx-3">
                                <BsGrid3X3GapFill />
                            </span>
                            <span>
                                <FaList />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Filter;

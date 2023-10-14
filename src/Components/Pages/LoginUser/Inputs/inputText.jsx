import React from "react";
import { Field, ErrorMessage } from 'formik';
const InputsText = () => {
    return (
        <div className="formFields grid grid-cols-2">
            <div className="name">
                Name:  <input type="Name" name="Name" className="border ml-[17px] mx-0 my-2.5 px-[9px] py-[3px] rounded-[10px] border-solid" />
               
            </div>
            <div className="email">
                Email: <input type="email" name="email" value="test@gmail.com" className="ml-[30px] border mx-0 my-2.5 px-[9px] py-[3px] rounded-[10px] border-solid" />
                
            </div>

            <div className="number">
                Number: <input type="text" name="Phonenumber" className="border mx-0 my-2.5 px-[9px] py-[3px] rounded-[10px] border-solid" />
               
            </div>


            <div className="password">
                Password: <input type="password" name="password" className="border mx-0 my-2.5 px-[9px] py-[3px] rounded-[10px] border-solid" />
               
            </div>

        </div>
    )
}

export default InputsText;
import React from "react";
import { Field, ErrorMessage } from 'formik';
const InputsRadio = () => {
    return (
        <div className="formFieldsRadio">
            <h2>Gender</h2>
            <div>
                Male: <input type="radio" name="gender" />
                
            </div>

            <div>
                Female: <input type="radio" name="gender" />
                
            </div>

            <div>
                Other: <input type="radio" name="gender" />
                
            </div>


        </div>
    )
}

export default InputsRadio;
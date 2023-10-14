// Render Prop
import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import InputsText from './Inputs/inputText';
import InputsRadio from './Inputs/InputRadio';
import { useAuth0 } from "@auth0/auth0-react";


const Signup = () => {

   



    return (
        <>

            <div className='bg-[#fafafb]'>
                <div className='signup_form w-[50%] bg-[#789884] p-[10px] m-auto' style={{ marginTop: "96px" }}>
                    <div className='container'>
                        <div className='ProfilePic  flex justify-center'>
                            <span className='flex items-center'>Profile Pic</span>
                        </div>
                        <h2 className="text-center py-3">WELCOME TO KEYCART!</h2>
                        <div className='formAllInputs  my-5'>
                            <form>
                                <InputsText />
                                <InputsRadio />
                                <div className='flex justify-center'>
                                    <button type="submit"  className=' bg-[#354d61] w-[200px] p-3 text-white font-bold rounded-[10px]'>Submit</button>
                                    <button>
                                        Log Out
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}


export default Signup;
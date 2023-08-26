import axios from 'axios';
import { search_Items } from '../config';


export const categoryData=async(category)=>{
   const response= await axios.get(search_Items+`products/category/${category ? category : "electronics"}`)
  if(!response){
   console.log("data not found ")
  }
  return response.data

    
}
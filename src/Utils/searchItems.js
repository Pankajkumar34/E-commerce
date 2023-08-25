import axios from 'axios';
import { search_Items } from '../config';
export const searchItems=async(desc)=>{
    // products?sort=desc
    const response=await axios.get(search_Items+`products?sort=${desc}`)
  
    return response.data
}
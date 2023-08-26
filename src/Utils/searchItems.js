import axios from 'axios';
import { search_Items } from '../config';
export const searchItems=async(desc)=>{
    const response=await axios.get(search_Items+`products?sort=${desc==null? "desc":desc}`)
    return response.data
}
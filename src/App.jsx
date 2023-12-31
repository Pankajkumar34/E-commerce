
// import './App.css'
import Layout from "./Components/Layout"
import Home from "./Components/Pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Signup from './Components/Pages/LoginUser/Signup'
import Wishlist from "./Components/Pages/Wishlist"; 
import SinglePage from "./Components/Pages/SinglePage/singlePage";
function App() {
  
  // https://youtu.be/p53gC8PNsuo
  // https://apneck-eclarkhalid.netlify.app/
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Shop" element={<Shop/>}/>
    <Route path="Blog" element={<Blog/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Cart" element={<Cart/>}/>
    <Route path="Login" element={<Signup/>}/>
    <Route path="Wishlist" element={<Wishlist/>}/>
    <Route path="product/:id" element={<SinglePage/>}/>
    
  </Route>

</Routes>
</BrowserRouter>
    </>
  )
}

export default App

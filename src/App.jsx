// import Cart from "./pages/Cart";
// import Product from "./pages/Product";
// import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Register from "./pages/Register";
import {Home,Register,Login,Cart,Product,ProductList} from './pages'


const App = () => {
  return(<div >
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productlist" element={<ProductList/>}/>
    {/* <Route path="/item/:itemId" element={<Item/>}/> */}
    
    
    </Routes>
    </BrowserRouter>
  </div >
    ) 
};

export default App;
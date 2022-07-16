import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "../components/detail/Detail"
import { GlobalStyles } from "../components/globalStyles/Global.styles"
import Navbar from "../components/navbar/Navbar"
import About from "../pages/about/About"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <div>
    <BrowserRouter>
        <GlobalStyles/>
        <Navbar/>
      
        <Routes>    
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="about" element={<PrivateRouter/>}>
                <Route path="" element={<About/>}/>
            </Route>
            <Route path="detail" element={<PrivateRouter/>}>
                <Route path="" element={<Detail/>}/>
            </Route>

        </Routes>


    </BrowserRouter>
    
    </div>
  )
}

export default AppRouter
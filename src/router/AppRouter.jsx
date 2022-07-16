import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyles } from "../components/globalStyles/Global.styles"
import Navbar from "../components/navbar/Navbar"
import About from "../pages/about/About"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"

const AppRouter = () => {
  return (
    <div>
    <BrowserRouter>
        <GlobalStyles/>
        <Navbar/>
      
        <Routes>    
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="about" element={<About/>}/>

        </Routes>


    </BrowserRouter>
    
    </div>
  )
}

export default AppRouter
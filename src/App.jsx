import { Button } from "@/components/ui/button"
import { Route,Routes } from "react-router-dom"
import Home from "./Pages/home"
import {LoginForm} from './Components/login-form'
import Bode from "./Pages/Bode"
function App() {
  return (
    <div className=" bg-gray-900 flex  flex-col items-center justify-center">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<LoginForm/>}/>
      <Route path="/plot" element={<Bode/>}/>
     </Routes>
    </div>
  )
}

export default App
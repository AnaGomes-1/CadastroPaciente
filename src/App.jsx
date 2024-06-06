import { useState } from 'react'
import './App.css'
import {Home} from "./Components/Home/Home"
import Login from './Components/Login/Login'
import Cadastro from './Components/Cadastro/Cadastro' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Login/>
      <Cadastro/>
    </>
  )
}
export default App

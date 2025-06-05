import { useState } from 'react'
import './App.css'



function App() {

  const [bgColor, setBgColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setBgColor("red")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:bgColor}}>Red</button>
          <button onClick={()=>{setBgColor("black")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:bgColor}}>Black</button>
          <button onClick={()=>{setBgColor("green")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:bgColor}}>Green</button>
          <button onClick={()=>{setBgColor("blue")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:bgColor}}>Blue</button>
          <button onClick={()=>{setBgColor("pink")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:bgColor}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
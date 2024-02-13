import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "raj",
    age:21
  }
  let myArr = [1,2,3,4];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      {/* <Card channel="chaiaurcode" someobj = {{name:"raj"}}/> */}
      {/* <Card username="chaiaurcode" someobj = {myObj}/> */}
      {/* <Card channel="chaiaurcode" myarr = {[1,2,3]}/> */}
      {/* <Card channel="chaiaurcode" myarr = {myArr}/> */}

      <Card username="chaiaurcode" btntext = "Click me"/>



      <Card username="raj" />
      <Card />


      

    </>
  )
}

export default App

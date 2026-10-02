import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
   const [message, setMessage] = useState("Welcome to my website");
   const name = "Himanshu";
   const role = "Automation Tester";

   function handleClick() {
  setMessage("Thanks for clicking!");
}

  return (
    <div>
      <h1>Hello,{name}!</h1>
      <h2>Role: {role}!</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
   const [message, setMessage] = useState("Welcome to my website");
    const[count,setCount]  = useState(0);
   const name = "Himanshu";
   const role = "Automation Tester";

   function handleClick() {
      if(message === "Welcome to my website"){
        setMessage("Thanks for clicking!");
      }else{
        setMessage("Welcome to my website");
      } 
      setCount(count+1);
}

  return (
    <div>
      <h1>Hello,{name}!</h1>
      <h2>Role: {role}!</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked:{count}{count==1 ? "time": "times"}</p>
      <Greeting name={name} />
    </div>
  )
}
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

export default App

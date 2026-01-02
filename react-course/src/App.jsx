// import Todo from "./components/Todo.jsx"
// import TodoTitle from "./components/TodoTitle.jsx"
// import Popup from "./components/popup.jsx"
// import { useState,useEffect } from "react"
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Posts from "./pages/Posts.jsx"
import Users from "./pages/Users.jsx"
import Nav from "./components/nav.jsx"

function App() {
  // const[num,setnum]=useState(0)
  // const [popupopen, setpopupopen]=useState(false)

  // function Incre({num}){
  //   return(
  //     setnum(num+1)
  //   )
  // }

  // function Decre({num}){
  //   return(
  //     setnum(num-1)
  //   )
  // }

  // function Res(){
  //   return(
  //     setnum(0)
  //   )
  // }

  

  // function togglepopup(){
  //   setpopupopen(true)
  //   console.log('parent notified')
  // }
  // function cancelpopup(){
  //   setpopupopen(false)
  //   console.log('parent notified')
  // }
  // useEffect(() => {
  //   console.log("ONLY when Component mounts")
  // }, [])
  // useEffect(() => {
  //   console.log(`ONLY when Component mounts and ${popupopen} changes`)
  // }, [popupopen])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/user/:id' element={<Users />} />
      </Routes>
      <div>

      </div>
    </Router>
    
    // <>
    //   <TodoTitle />
    //   <div>
    //     <input type="text" onChange={(events) =>
    //       {console.log(events.target.value)}
    //     }/>
    //     <button onClick={() => setpopupopen(true)}>Add to do</button>
    //     {/* <button onClick={() => Incre({num})}>Increment</button>
    //     <button onClick={() => Decre({num})}>Decrement</button>
    //     <button onClick={() => Res()}>Reset</button> */}
    //   </div>
    //   <Todo 
    //   togglepopup={togglepopup}
    //   task="Learn React" />
    //   <Todo 
    //   togglepopup={togglepopup}
    //   task="Finish Asap Frontend"/>
    //   <Todo 
    //   togglepopup={togglepopup}
    //   task="Land a junior job"/>
    //   <Todo 
    //   togglepopup={togglepopup}
    //   task="Earn $100k+"/>
    //   {popupopen && <Popup cancelpopup={cancelpopup}
    //   question="Are you sure?"/>}
    // </>
  )
}

export default App

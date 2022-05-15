// import './App.css';
import React,{useState} from 'react';
import Courses from './Components/Course/Courses';
import Home from './Components/home/Home';
import Nav from './Components/nav/Nav';
function App() {
  const [Posts] = useState([
    {Postname:"Web Service", PostBactch:"4th", PostSemister:"2nd"},
    {Postname:"Info Sec", PostBactch:"4th", PostSemister:"2nd"},
    {Postname:"Enterpreneurship", PostBactch:"4th", PostSemister:"2nd"}
  ])
 
  return (
    <>
      <Nav/>
      <Home/>
      <div className='Posts'>
        {
          Posts.map(item=>(
            <Courses name={item.Postname} batch={item.PostBactch} semister={item.PostSemister}/>
          ))
        }
      </div>
    </>
  );
}

export default App;

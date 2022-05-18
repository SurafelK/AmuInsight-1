import SignIn from './Components/Login/signin';
import SignUp from './Components/Login/signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
<<<<<<< HEAD
import Dashboard from './Components/Dashboard';
// import Nav from './Components/nav/Nav';
=======
import Finals from './Components/Final/Finals';
>>>>>>> 434d889a41a913fa1b698d45c4077bd6fad244cc

function App() { 
  return (
    <>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/home' exact element={<Dashboard/>}/>
          <Route path='/users/login' exact element={<SignIn/>}/>
          <Route path='/users' element={<SignUp/>}/>
=======
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/signin' exact element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/Finals' element={<Finals/>}/>
>>>>>>> 434d889a41a913fa1b698d45c4077bd6fad244cc
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

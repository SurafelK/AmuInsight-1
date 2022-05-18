import SignIn from './Components/Login/signin';
import SignUp from './Components/Login/signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
// import Nav from './Components/nav/Nav';

function App() { 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' exact element={<Dashboard/>}/>
          <Route path='/users/login' exact element={<SignIn/>}/>
          <Route path='/users' element={<SignUp/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

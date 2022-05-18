import SignIn from './Components/Login/signin';
import SignUp from './Components/Login/signup';
import Home from './Components/home/Home'
import Nav from './Components/nav/Nav'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Finals from './Components/Final/Finals';

function App() { 
  return (
    <>
      <Nav/>
      <Router>
        <Routes>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/signin' exact element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/Finals' element={<Finals/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

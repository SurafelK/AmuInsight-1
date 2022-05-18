import React from "react";
import './Nav.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Nav(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/users/login')
    }

    return(
        <div className="navbar">
            <h1 id="logo">AMUINSIGHT</h1>
            <div className="btns">
                <button className='usernamebtn' color="red" onClick={onLogout}>A</button>
                <button className='uploadbtn'>upload</button>  
            </div>
        </div>
    );
}
export default Nav;
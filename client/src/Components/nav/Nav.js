import React from "react";
import './Nav.css';
function Nav(){
    return(
        <div className="navbar">
            <h1 id="logo">AMUINSIGHT</h1>
            <div className="btns">
                <button className='usernamebtn' color="red">F</button>
                <button className='uploadbtn'>upload</button>  
            </div>
        </div>
    );
}
export default Nav;
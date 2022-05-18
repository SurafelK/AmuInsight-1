import React from "react";
import Nav from '../nav/Nav';
import './Final.css';
function Finals(){
    return(
        <>
        <Nav/>
        <div className="container">
              
              <div className="exams">
                  <h1>Exams</h1>
              </div>
            <div className="yrs">
                <h4>2019-Mid-Exams</h4>
                <h4>2019-Mid-Exams</h4>
            </div>
              <div className="note">
                <h1>Notes</h1>
              </div>
              <div className="overview">
                <h4>overview Surafel</h4>
                <h4>Cheat sheet Nahom</h4>
              </div>
        </div>
        </>
    );
}
export default Finals;
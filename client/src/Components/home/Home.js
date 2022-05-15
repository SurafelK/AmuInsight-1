import React from "react";
import './home.css';
function Home()
{
    return(
        <>
        <div className="container">
              
            <div className="slogan">
                <h1>Your best note and exam sharing</h1>
            
            </div>
            <div className="yrbtns">
                <button className="g">All</button>
                <button className="g">G1</button>
                <button className="g">G2</button>
                <button className="g">G3</button>
                <button className="g">G4</button>
                <button className="g">G5</button>
                
            </div>   
            <div className="donate ">
                <h2>Donate to Collections</h2>
            </div>
        </div>
        </>
    
    );
    }

export default Home;
import React from "react";
import './course.css'
function Courses({name,batch,semister})
{
    return(
        <>
        <div className="courses">
            <div className="Posts">
                <div className="course">
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="info">
                <p> {batch}</p>
                <p> {semister}</p>
            </div>
        </div>
       
        
        
        </>
    );
}

export default Courses;
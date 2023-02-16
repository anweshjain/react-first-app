import React from "react";

const Component2 = () => {
    const handleClick =() =>{
        alert("Button clicked !!");
    }
    return(
        <div>
            <h1>24/7 assistance </h1>
            <button onClick={handleClick}>click</button>
        </div>
    );
};

export default Component2;

import React from "react";
import Component2 from "./Component2";

const Component1 = () => {
    const passwordRegex= /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
    
    // const handelNameChange =(event) =>{
    //     console.log(event.target.value);
       
    //     }
        const handelPasswordChange = (event)=> {
            if (passwordRegex.test(event.target.value)){
            console.log("match");
            }
            else{
                console.log(" not match");
            }
    };
    
    return(
        <div>
            <h1>how can I help you?</h1>
            <form>
                <label> name :   </label>
                <input type="text"name="name"/>
                <br />
                <label> password :  </label>
                <input type ="password" name="password" onChange={handelPasswordChange}></input><br></br>
                <br />
                <input type = "submit" value ="submit"/>
            </form>
            
        </div>
    );
    };

export default Component1;


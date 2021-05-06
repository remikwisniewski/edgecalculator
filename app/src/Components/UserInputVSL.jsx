import React from 'react';

function UserInput(){
    return (
        <div>
            <form class = "inputForm">
                <div class = "textBox"> 
                    <input type="text" required/>
                    
                    <label> Actual Price </label>
                </div>
                <div class = "textBox">
                    <input type="text" required/>
                    
                    <label> Low Price </label> 
                </div>
                <div class = "textBox">
                    <input type="text" required/>
                    
                    <label> Average True Range </label>
                </div>  
                <div class = "textBox">
                    <input type="text" required/>
                    
                    <label> Max Stop Loss ($) </label>
                </div>        
                <button class = "buttonInputForm buttonH">Calculate</button>
            </form>
        </div>
    )
}

export default UserInput;


{/* 

use the function version of useState for better run time
 ex) useState( useState( () => { return 4 } ))

use multiple "hooks", one for each computation
-
component example:
function Welcome(props){...}

<Welcome name="..."/>

-
use states to change values

-
classes and functions seen as the same
-
use <form> <label>
https://reactjs.org/docs/forms.html -- when coding the calculations
*/} 


import React, {Component} from 'react';




class UserInput extends Component{
    /* gets user input */
    
    constructor(props){
        super(props);

        this.state = {
            price: '' 
        }
    }



    render() {
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
                <button class = "buttonInputForm">Calculate</button>
            </form>
        </div>
    )
    }
}

export default UserInput;


{/* 

use the function version of useState for better run time
 ex) useState( useState( () => { return 4 } ))

 https://www.youtube.com/watch?v=O6P86uwfdR0&ab_channel=WebDevSimplified

use multiple "hooks", one for each computation
-
component example:
function Welcome(props){...}

<Welcome name="..."/>

-



-


*/} 


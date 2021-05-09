import React, {Component} from 'react';

class UserInput extends React.Component{
    /* gets user input */
    
    constructor(props){
        super(props);
        
        this.state = {
            actualPrice: '' 
        }
    }


    render() {
    return (
        <div className = 'container'>
            <div>
                <form className = "inputForm">
                    <div className = "textBox"> 
                        <input type="text" required/>
                        
                        <label> Actual Price </label>
                    </div>
                    <div className = "textBox">
                        <input type="text" required/>
                        
                        <label> Low Price </label> 
                    </div>
                    <div className = "textBox">
                        <input type="text" required/>
                        
                        <label> Average True Range </label>
                    </div>  
                    <div className = "textBox">
                        <input type="text" required/>
                        
                        <label> Max Stop Loss ($) </label>
                    </div>        
                    <button className = "buttonInputForm">Calculate</button>
                </form>
            </div>

            <div>
            <form class = "resultForm">
                <div class = "resultFormText">
                    <p> StopLoss 1 ATR: </p>
                    <p> Number of Shares: </p>
                    <p> Forex Lots: </p>
                </div>
               <br/> 
               <div class = "resultFormText">
                    <p> StopLoss 2 ATR: </p> 
                    <p> Number of Shares: </p>
                    <p> Forex Lots: </p>
               </div> 
               <br/>

               <div class = "resultFormText">
                    <p> StopLoss 3 ATR: </p>   
                    <p> Number of Shares: </p>  
                    <p> Forex Lots: </p>
               </div>
                
            </form>

            </div>
        </div>
    )
    }
}

export default UserInput;

{/*
styling for results:
- add seperation between each stoploss order
- have a border div element around it
*/}


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


import React, {Component} from 'react';

{/*
    Volatility Stop Loss Long Results - computation file (imported by Volatility Long)
*/}

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
    )
    }
}

export default UserInput;
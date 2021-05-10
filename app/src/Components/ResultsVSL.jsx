import React, {Component} from 'react';
import UserInputVSL from './UserInputVSL';

{/*
    Volatility Stop Loss Long Results - computation file (imported by Volatility Long)
*/}


/*
Functions Calculating values
*/


class ResultsVSL extends React.Component{
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
                    <p> StopLoss 2 ATR: </p> 
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

export default ResultsVSL;
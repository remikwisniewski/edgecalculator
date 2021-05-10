import React, {Component} from 'react';
import UserInputVSL from './UserInputVSL';

{/*
    Volatility Stop Loss Long Results - computation file (imported by Volatility Long)
*/}


/*
Functions Calculating values
*/

function SL1ATR(lowPrice, ATR){
    return lowPrice - ATR;
}

function NumShares(actualPrice, lowPrice, ATR, maxSL){
    var sl1 = lowPrice - ATR;
    var num = actualPrice - sl1;
    return maxSL / num;

}

function Forexlots(actualPrice, lowPrice, ATR, maxSL){
    var sl1 = lowPrice - ATR;
    var num = actualPrice - sl1;
    var num2 = maxSL / num;
    return num2 / 100000; 
}


class ResultsVSL extends React.Component{
    /* gets user input */
    

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

export default ResultsVSL;
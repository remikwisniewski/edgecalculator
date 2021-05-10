import React, {Component} from 'react';

{/*
    Volatility Stop Loss Long Results - computation file (imported by Volatility Long)
*/}


/*
Functions Calculating values
*/

function SL1ATR(lowPrice, averageTR){
    return lowPrice - averageTR;
}

function NumShares(actualPrice, lowPrice, averageTR, maxSL){
    var sl1 = lowPrice - averageTR;
    var num = actualPrice - sl1;
    return maxSL / num;

}

function Forexlots(actualPrice, lowPrice, averageTR, maxSL){
    var sl1 = lowPrice - averageTR;
    var num = actualPrice - sl1;
    var num2 = maxSL / num;
    return num2 / 100000; 
}

class UserInput extends React.Component{
    /* gets user input */
    
    constructor(props){
        super(props);
        this.state = {
            actualPrice: '',
            lowPrice: '',
            averageTR: '',
            maxSL: '',
        };
    }

    render() {
        
    return (
   
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
            </form>
        </div>
    )
    }
}


class ResultsVSL extends React.Component{
    /* gets user input */

    render() {
        
    return (
        <div className = 'container'>
            <UserInput/>
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

export default ResultsVSL;


{/*
styling for results:
- add seperation between each stoploss order
- have a border div element around it
*/}


{/*


how to get input:
- 
value = {variable} - how we will change results
onChange = - handles change when form changes
we need to create functions that display values like components

in order to pass props from userinput to results, userinput is the parent
resultsVSL has to take into render UserinputVSL

what we have to do:
1) we have to get user input in UserInputVSl, and
then send it to resultsVSL. How?

specifiy id's of each input 
we need to have results holding 
handlechange updates the values, ex) handleSL1Change, handleSharesChange, handleFL1Change, etc..
have edge case for conversion


HOW:
userinputVSL: have the input + result form
resultsVSL: use props to input data into userinput

classname1 = results(display)
classname2 = input(data)

class classname2 extends React.Component {
  this.state = { statename1: "lala" };
  render() {
    return <classname1 statename1={this.state.statename1} />
  }
};

class classname1 extends React.Component {
  render() {
    return (
       <div>{this.props.statename1}</div> // has access to classname2
    );
  }
};


class UserInput:
- html of input form -> sends to results

class results:
- html of results form -> sends to volatilityLong

volatility long:
- Result component

*/} 
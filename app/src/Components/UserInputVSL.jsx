import React, {Component} from 'react';

{/*
    Volatility Stop Loss Long Input file (imported by Volatility Long and ResultVSL)
*/}



class UserInput extends React.Component{
    /* gets user input */
    
    constructor(props){
        super(props);
        this.state = {
            actualPrice: ''
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

export default UserInput;

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

class UserInput:
- 


- 



*/} 


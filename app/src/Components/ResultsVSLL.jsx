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

function NumShares1(actualPrice, lowPrice, averageTR, maxSL){
    var sl1 = lowPrice - averageTR;
    var num = actualPrice - sl1;
    var res = maxSL / num;
    return res.toFixed(0);
}

function Forexlots1(actualPrice, lowPrice, averageTR, maxSL){
    var num1 = lowPrice - averageTR;
    var res = maxSL / num1;
    res = res / 100;
    return res;
}

/* 2 */

function SL2ATR(lowPrice, averageTR){
    var num1 = lowPrice - averageTR * 2;
    return num1.toFixed(1);

}

function NumShares2(actualPrice, lowPrice, averageTR, maxSL){
    var sl2 = lowPrice - averageTR * 2;
    var num = actualPrice - sl2;
    var res = maxSL / num;
    return res.toFixed(0);

}

function Forexlots2(actualPrice, lowPrice, averageTR, maxSL){
}

/* 3 */

function SL3ATR(lowPrice, averageTR){
    var num1 = lowPrice - averageTR * 3;
    return num1.toFixed(1);
}

function NumShares3(actualPrice, lowPrice, averageTR, maxSL){
    var sl2 = lowPrice - averageTR * 3;
    var num = actualPrice - sl2;
    var res = maxSL / num;
    return res.toFixed(0);

}

function Forexlots3(actualPrice, lowPrice, averageTR, maxSL){
    var sl1 = lowPrice - averageTR;
    var num = actualPrice - sl1;
    var num2 = maxSL / num;
    return num2 / 100000; 
}

class ResultsVSL extends React.Component{
    /* gets user input */

    constructor(props){
        super(props);
        this.state = {
            actualPrice: '',
            lowPrice: '',
            averageTR: '',
            maxSL: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        
    return (

        <div className = 'containerVSLL'>
            <div>
            <form className = "inputFormVSLL">
                <div className = "textBox"> 
                    <input type="text" name="actualPrice" value={this.state.actualPrice} onChange={this.handleInputChange} required/>    
                    <label> Actual Price: </label>
                </div>
                <div className = "textBox">
                    <input type="text" name="lowPrice" value={this.state.lowPrice} onChange={this.handleInputChange} required/>
                    <label> Low Price: </label> 
                </div>
                    <div className = "textBox">
                    <input type="text" name="averageTR" value={this.state.averageTR} onChange={this.handleInputChange} required/>
                    <label> Average True Range </label>
                </div>  
                <div className = "textBox">
                    <input type="text" name="maxSL" value={this.state.maxSL} onChange={this.handleInputChange} required/>
                    <label> Max Stop Loss ($) </label>
                </div>        
            </form>
            </div>

            <div>
            <form class = "resultFormVSLL">
                <div class = "resultFormTextVSLL">
                    <p> StopLoss 1 ATR: {SL1ATR(this.state.lowPrice, this.state.averageTR)} </p> 
                    <p> Number of Shares: {NumShares1(this.state.actualPrice, this.state.lowPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots1(this.actualPrice, this.lowPrice, this.averageTR, this.maxSL)}</p>
                </div>
               <br/> 
               <div class = "resultFormTextVSLL">
                    <p> StopLoss 2 ATR: {SL2ATR(this.state.lowPrice, this.state.averageTR)}</p> 
                    <p> Number of Shares: {NumShares2(this.state.actualPrice, this.state.lowPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots2(this.actualPrice, this.lowPrice, this.averageTR, this.maxSL)}</p>
               </div> 
               <br/>
               <div class = "resultFormTextVSLL">
                    <p> StopLoss 3 ATR: {SL3ATR(this.state.lowPrice, this.state.averageTR)} </p> 
                    <p> Number of Shares: {NumShares3(this.state.actualPrice, this.state.lowPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots3(this.actualPrice, this.lowPrice, this.averageTR, this.maxSL)}</p>
               </div>   
            </form>
            </div>
        </div>      
    )
    }
}

export default ResultsVSL;

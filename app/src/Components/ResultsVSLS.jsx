import React, {Component} from 'react';

{/*
    Volatility Stop Loss Short Results - computation file (imported by Volatility Short)
*/}


/*
Functions Calculating values
*/

function SL1ATR(highPrice, averageTR){
    return parseFloat(highPrice) + parseFloat(averageTR);
}

function NumShares1(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR);
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    return res.toFixed(0);
}

function Forexlots1(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR) * 2;
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    res = res.toFixed(0);

    if (res < 100){
        return 0;
    }
    return res / 100;
}

/* 2 */

function SL2ATR(highPrice, averageTR){
    return parseFloat(highPrice) + parseFloat(averageTR) * 2;

}

function NumShares2(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR) * 2;
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    return res.toFixed(0);

}

function Forexlots2(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR) * 2;
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    res = res.toFixed(0);

    if (res < 100){
        return 0;
    }
    return res / 100;
}

/* 3 */

function SL3ATR(highPrice, averageTR){
    return parseFloat(highPrice) + parseFloat(averageTR) * 3;
}

function NumShares3(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR) * 3;
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    return res.toFixed(0);
}

function Forexlots3(actualPrice, highPrice, averageTR, maxSL){
    var num = parseFloat(highPrice) + parseFloat(averageTR) * 3;
    var num2 = num - parseFloat(actualPrice);
    var res = maxSL / num2;
    res = res.toFixed(0);
    
    if (res < 100){
        return 0;
    }
    return res / 100;
}

class ResultsVSL extends React.Component{
    /* gets user input */

    constructor(props){
        super(props);
        this.state = {
            actualPrice: '',
            highPrice: '',
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

        <div className = 'containerVSLS'>
            <div>
            <form className = "inputFormVSLS">
                <div className = "textBox"> 
                    <input type="text" name="actualPrice" value={this.state.actualPrice} onChange={this.handleInputChange} required/>    
                    <label> Actual Price </label>
                </div>
                <div className = "textBox">
                    <input type="text" name="highPrice" value={this.state.highPrice} onChange={this.handleInputChange} required/>
                    <label> High Price </label> 
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
            <form class = "resultFormVSLS">
                <div class = "resultFormTextVSLS">
                    <p> StopLoss 1 ATR: {SL1ATR(this.state.highPrice, this.state.averageTR)} </p> 
                    <p> Number of Shares: {NumShares1(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots1(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)}</p>
                </div>
               <br/> 
               <div class = "resultFormTextVSLS">
                    <p> StopLoss 2 ATR: {SL2ATR(this.state.highPrice, this.state.averageTR)}</p> 
                    <p> Number of Shares: {NumShares2(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots2(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)}</p>
               </div> 
               <br/>
               <div class = "resultFormTextVSLS">
                    <p> StopLoss 3 ATR: {SL3ATR(this.state.highPrice, this.state.averageTR)} </p> 
                    <p> Number of Shares: {NumShares3(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)} </p>
                    <p> Forex Lots: {Forexlots3(this.state.actualPrice, this.state.highPrice, this.state.averageTR, this.state.maxSL)}</p>
               </div>   
            </form>
            </div>
        </div>      
    )
    }
}

export default ResultsVSL;

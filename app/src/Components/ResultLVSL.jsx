import React from 'react';

function ResultLVSL() {
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

export default ResultLVSL;


{/*
styling:
- add seperation between each stoploss order
- have a border div element around it
*/}
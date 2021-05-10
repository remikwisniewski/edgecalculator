import React from 'react';
import ResultsVSLL from './ResultsVSLL';

{/*
    VolatilityLong Header File
*/}

class VolatilityLong extends React.Component{
    render(){
    return (
        <div id="page1">
            <div className = 'VSL'>
                <h1>
                    Volatility Stop Loss Long
                </h1>
            </div>
            <div>
                <ResultsVSLL/>
            </div>          
        </div>
    )
    }
}

export default VolatilityLong;

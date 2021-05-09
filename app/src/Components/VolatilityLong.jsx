import React from 'react';
import UserInputVSL from './VSLL.jsx';

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
        
        <UserInputVSL/>
                
        </div>
    )
    }
}

export default VolatilityLong;

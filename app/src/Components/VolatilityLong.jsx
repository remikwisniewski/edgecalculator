import React from 'react';
import UserInputVSL from './UserInputVSL.jsx';
import ResultLVSL from './ResultLVSL.jsx';

function VolatilityLong(){
    return (
        <div id="page1">
            <div className = 'VSL'>
                <h1>
                    Volatility Stop Loss Long
                </h1>
            </div>
            
            <div className = 'container'>
                <UserInputVSL/>
                <ResultLVSL/>
                
            </div>

        </div>
    )
}

export default VolatilityLong;

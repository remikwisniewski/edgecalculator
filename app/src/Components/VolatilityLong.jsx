import React from 'react';
import UserInputVSL from './UserInputVSL.jsx';
import ResultLVSL from './ResultLVSL.jsx';

function VolatilityLong(){
    return (
        <div>
            <div className = 'VSL'>
                <h1>
                    Volatility Stop Loss Long
                </h1>
                
                
            </div>
            <UserInputVSL/>
            <ResultLVSL/>
        </div>
    )
}

export default VolatilityLong;

{/* 
    we will have 2 components, the input, and the output 

*/} 
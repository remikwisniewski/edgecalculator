import React from 'react';
import UserInputVSL from 'react';

function VolatilityShort(){
    return (
        <div>
            <div className = 'VSLS'>
                <h1>
                    Volatility Stop Loss Long
                </h1>
            </div>
            
            <div className = 'container'>
                <UserInputVSL/>
                
            </div>

        </div>
    )
}

export default VolatilityShort;

import React, { useState } from 'react';

function Navbar(){
    const [nav,setnav] = useState(false);

    {/* page scrolling */}
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground); {/* EVENT FUNCTION */}

    return(
        <nav>
        </nav>
    )
}

export default Navbar;
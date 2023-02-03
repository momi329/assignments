import React, { useState, useEffect } from 'react';

const Welcome=()=>{
    const [message, setMessage] = useState('Welcome Message');

    return(
        <header className="welcome">
            <h1 onClick={()=>setMessage('Have a nice Day')}>{message}</h1>
        </header>
    )
}

export default Welcome;
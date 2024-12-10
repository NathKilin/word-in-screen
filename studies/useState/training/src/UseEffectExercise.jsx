import React, { useState, useEffect } from 'react';

const UseEffectExercise = () => {
    const [count, setCount] = useState(0);

    // Hook useEffect que executa quando "count" muda
    useEffect(() => {
        console.log(`Counter changed to: ${count}`);
    }, [count]);

    return (
        <div>
            <h1>Exercise useEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default UseEffectExercise;

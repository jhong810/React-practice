import React, { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);
    
    const increaeseCount = () => setCount((count) => count + 1);
    const decreasesCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaeseCount, decreasesCount];
}

export default useCounter;
import React, { useMemo, useState } from 'react'

function Counter() {

    //initialized two states to be used for demonstration
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleIncrementOne = () => {
        setCounterOne(counterOne + 1)
    };

    //checking if it is even or not

    /*
      this fuction delays the update of whole dom.
      so, we can use useMemo to avoid this.
    */

    //without useMemo
    // const checkEven = () => {
    //     //we are going to delay the update of the state by using a loop
    //     let i = 0;
    //     while (i < 2000000000) i++;//this will delay the update
    //     return counterOne % 2 === 0;
    // }
    //without useMemo

    //with useMemo
    const checkEven=useMemo(() => {
        return counterOne % 2 === 0;
    }, [counterOne]);
    //with useMemo

    

    //the second function will also be delayed 
    //because of the delay from checkEven function function
    const handleIncrementTwo = () => setCounterTwo(counterTwo + 1);

    return (
        <div>
            {/* counter one */}
            <button onClick={handleIncrementOne}>Counter One -{counterOne}</button>
            {/* counter one */}
            {/* checking if counter one is even */}
            {/* {checkEven() ? <span>even</span> : <span> Odd</span>} without use memo */}
            {checkEven ? <span>even</span> : <span> Odd</span>} {/* with use memo  */}
            {/* checking if counter one is even */}


            {/* counter two */}
            <button onClick={handleIncrementTwo}>Counter Two -{counterTwo}</button>
            {/* counter two */}
        </div>
    )
}

export default Counter
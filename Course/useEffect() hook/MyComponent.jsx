// useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// 1. useEffect(() => {})               // Runs after every re-render
// 2. useEffect(() => {}, [])           // Runs only on mount
// 3. useEffect(() => {}, [value])      // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    /* Both do the same: Keep the title updating when the button "count" is pressed
    useEffect(() => {
        document.title = `count: ${count}`;
    });

    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]);
    */

    useEffect(() => {
        document.title = `count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Add</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent
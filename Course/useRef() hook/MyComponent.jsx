import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    console.log(ref);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef);
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click me1!
            </button>
            <input ref={inputRef1}/>  

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/> 

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/> 
        </div>  
    );
}
export default MyComponent;
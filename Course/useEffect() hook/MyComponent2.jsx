import React, {useState, useEffect} from "react";

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // iT'S NECESSARY TO USE THE USEEFFECT TO NOT ADD THOUSANDS OF EVENT LISTENERS WHEN THE WINDOW IS RESIZE
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // IT'S A GOOD PRACTICE
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `size: ${width} X ${height}px`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>window width: {width}px</p>
        <p>window height: {height}px</p>
    </>);
}

export default MyComponent2
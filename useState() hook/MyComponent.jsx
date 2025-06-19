import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Lucas");
    }

    const IncrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {Age}</p>
                <button onClick={IncrementAge}>Increment Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>)

}
export default MyComponent
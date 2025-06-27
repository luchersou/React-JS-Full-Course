import React, {userContext} from 'react';
import { UserContext } from './ComponentA.jsx';
import ComponentD from "./ComponentD.jsx"


function ComponentC(){

    const user = userContext(UserContext);

    return(
        <div className="box">
            <h1>{`Hello again ${user}`}</h1>
            <ComponentD />
        </div>
    );
}
export default ComponentC
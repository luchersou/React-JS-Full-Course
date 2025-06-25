import React, {userContext} from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentD(){

    const user = userContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}
export default ComponentD
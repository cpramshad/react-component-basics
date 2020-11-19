import React from 'react';

const userInput = (props) => {
    return (
        <input onChange={props.onchange} type="text" value={props.value}></input>
    )
}

export default userInput;
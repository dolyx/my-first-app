import React from 'react';

//fonction composant
function WelcomeFunction(props) {
    console.log(props);
    return <h1>Bonjour fonction {props.name}</h1>
}

export default WelcomeFunction;
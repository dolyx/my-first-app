import React from 'react'

//fonctions composants
function WelcomeFonction(props) {
    console.log(props);
    return <h1>Bonjour {props.name}</h1>;
}

export default WelcomeFonction;
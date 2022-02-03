import React from 'react';

//composants à base de class
class WelcomeClass extends React.Component {

    render() {
        console.log(this.props);
        return <h1>Bonjour class { this.props.name }</h1>
    }
}

export default WelcomeClass;
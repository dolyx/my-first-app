import React from 'react';

import './Home.css';

import InputText from '../../Components/InputText';
import LigthSwitch from '../../Components/LightSwitch';
import WelcomeClass from '../../Components/WelcomeClass';
import WelcomeFunction from '../../Components/WelcomeFunction';
import Counter from '../../Components/Counter';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <WelcomeClass name='Anîsa' />
                <WelcomeFunction name='Hani' />
                <LigthSwitch name='interrupteur principal' />
                <InputText name='firstname' placeholder="votre prenom" />
                <InputText name='lastname' placeholder="votre nom" />
                <InputText name='nickname' placeholder="votre surnom" />        
                <Counter />    
            </div>
        );
    }
}

export default Home;


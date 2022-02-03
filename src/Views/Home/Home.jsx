import React from 'react';

import './Home.css';

import InputText from '../../components/InputText';
import LigthSwitch from '../../components/LightSwitch';
import WelcomeClass from '../../components/WelcomeClass';
import WelcomeFunction from '../../components/WelcomeFunction';
import Counter from '../../components/Counter';

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
                <h1>Bonjour tout le monde</h1>
                <WelcomeClass name='nicolas' />
                <WelcomeClass name='Remi' />
                <WelcomeFunction name='Thomas' />
                <WelcomeFunction name='Julie' />
                <LigthSwitch name='interupteur 1' />
                <LigthSwitch name='interupteur 2' />
                <InputText name='firstname' placeholder="votre prenom" />
                <InputText name='lastname' placeholder="votre nom" />
                <InputText name='nickname' placeholder="votre surnom" />        
                <Counter />    
            </div>
        );
    }
}

export default Home;


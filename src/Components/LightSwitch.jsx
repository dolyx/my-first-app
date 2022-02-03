import React from 'react';
import './LightSwitch.css';

class LigthSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false
        };
    }

    componentDidMount() {
        /*
        setTimeout(() => {
            this.setState({
                switch: true 
            });
        }, 5000);
        */
    }

    handleClic = () => {
        this.setState({
            switch: !this.state.switch
        });
    }

    color() {
        return this.state.switch ? '#00FF00' : '#FF0000';
    }

    render() {
        return (
            <div className='content'>
                <span>{this.props.name}</span>
                <button onClick={this.handleClic}>toggle</button>
                <div className='box' style={{
                    backgroundColor: this.color()
                }}>
                
                </div>      
            </div>
        );
    } 
}

export default LigthSwitch;
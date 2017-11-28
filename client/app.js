import React, { Component } from 'react';
import Header from './Components/Header/header.js';
import InputForm from './Components/inputForm/inputform.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputForm />
            </div>
        );
    }
}

export default App;
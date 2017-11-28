import React, { Component } from 'react';
import Header from './Components/Header/header.js';
import InputForm from './Components/inputForm/inputform.js';
import ExpenceListByMonth from './containers/expenselistmonths.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputForm />
                <ExpenceListByMonth />
            </div>
        );
    }
}

export default App;
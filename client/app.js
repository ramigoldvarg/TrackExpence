import React, { Component } from 'react';
import Header from './Components/Header/header.js';
import InputForm from './Components/inputForm/inputform.js';
import ExpenceListByMonth from './containers/expenselistmonths.js';
import ExpenceList from './containers/expenselist.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <InputForm />
                <ExpenceListByMonth />
                <ExpenceList />
            </div>
        );
    }
}

export default App;
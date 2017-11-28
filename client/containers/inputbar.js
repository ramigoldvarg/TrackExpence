import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpence } from '../actions/index.js';

class InputBar extends Component {
    constructor(props) {
        super(props);
        let expense = {
            amount: '',
            bIsCash: false,
            place: ''
        };

        this.state = {
            amount: expense.amount,
            bIsCash: expense.bIsCash,
            place: expense.place
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCashChange = this.handleCashChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCashChange() {
        this.setState({bIsCash: !this.state.bIsCash});
    }

    onAdd() {
        let newExpense = {
            amount: this.state.amount,
            bIsCash: this.state.bIsCash,
            place: this.state.place
        };

        this.props.addExpence(newExpense);
        this.setState({ 
            amount: '',
            place: ''
        });
    }

    render() {
        return (
            <div> 
                <label>
                    כמה?
                    <input type='text' name="amount" value={this.state.amount} onChange={this.handleChange} />
                </label>
                <label>
                    איפה?
                    <input type='text' name="place" value={this.state.place} onChange={this.handleChange} />
                </label>
                <button onClick={this.handleCashChange}>
                    {
                        this.state.bIsCash ? "מזומן" : "אשראי"
                    }
                </button>
                <button onClick={this.onAdd}>
                    הוסף
                </button>    
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addExpence }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputBar);
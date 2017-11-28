import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeExpenceById } from '../actions/index.js';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleOnDelete() {
        this.props.onDelete(this.props.expense._id);
    }

    render() {
        return (
            <div>
                <span> {this.props.expense.amount} </span>
                <span> {this.props.expense.place} </span>
                <span> {this.props.expense.bIsCash?"cash":"credit"} </span>
                <span> {new Date(this.props.expense.date).toLocaleDateString()} </span>
                <button onClick={this.handleOnDelete}> X </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onDelete: removeExpenceById }, dispatch);
}

export default connect(null, mapDispatchToProps)(Expense);
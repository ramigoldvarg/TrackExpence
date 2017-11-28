import React, { Component } from 'react';
import Expense from './expense.js';
import { connect } from 'react-redux';
import { getAllExpences } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getAllExpences();
    }

    render() {
        if (!this.props.expences) {
            return <h3> Loading.. </h3>;
        }

        return (
            <div>
                {
                    this.props.expences.map((currValue, index) => {
                        return <Expense expense={currValue} key={currValue._id} />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        expences: state.expences
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllExpences }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
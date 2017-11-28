import React, { Component } from 'react';
import Expense from '../containers/expense.js';
// import { connect } from 'react-redux';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.expences.length == 0) {
            return <h3> אין הוצאות!</h3>;
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

// function mapStateToProps(state) {
//     if ()
// }

// export default connect()(ExpenseList);
export default ExpenseList;
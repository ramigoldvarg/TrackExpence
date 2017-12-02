import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllExpences, choseMonth } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ExpenceListByMonth extends Component {
    constructor(props) {
        super(props);
        this.renderMonthExpences = this.renderMonthExpences.bind(this);
        this.state = {
            chosenMonth: null
        }
    }

    componentDidMount() {
        this.props.getAllExpences();
    }
    
    renderMonthExpences() {
        if (!this.props.expences) {
            return (<h1> Loading.. </h1>);
        }

        let renderedAnswered = [];

        for (let currMonth in this.props.expences) {
            renderedAnswered.push(<div key={currMonth} onClick={() => this.props.choseMonth(currMonth)}>
                {currMonth}
            </div>);
        }

        return (renderedAnswered); 
    }

    render() {
        return (
            <div>
                <h2>חודשים של חזירות</h2>
                {this.renderMonthExpences()}
            </div>
        );
    }
}

function mapStateToProps({expencesByMonth}) {
    return { expences: expencesByMonth };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllExpences, choseMonth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenceListByMonth);
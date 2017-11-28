import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllExpences } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import ExpenceList from '../Components/expenselist.js';

class ExpenceListByMonth extends Component {
    constructor(props) {
        super(props);
        this.renderExpences = this.renderExpences.bind(this);
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
            renderedAnswered.push(<div key={currMonth} onClick={() => this.setState({chosenMonth: currMonth})}>
                {currMonth}
            </div>);
            // renderedAnswered = renderedAnswered.concat(this.props.expences[currMonth].map((curr)=> (<div key={curr._id}>{curr.date}</div>)));
        }

        return (renderedAnswered); 
    }

    renderExpences() {
        if (!this.state.chosenMonth) {
            return <h3> תבחר מועד התחזרות </h3>
        }

        return <ExpenceList expences={this.props.expences[this.state.chosenMonth]}/>
    }

    render() {
        return (
            <div>
                <h2>חודשים של חזירות</h2>
                {this.renderMonthExpences()}
                {this.renderExpences()}
            </div>
        );
    }
}

function mapStateToProps({expencesByMonth}) {
    return { expences: expencesByMonth };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllExpences }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenceListByMonth);
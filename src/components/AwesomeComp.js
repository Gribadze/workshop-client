import React, { Component } from 'react';
import {fetchDataFromServer} from "../services/localService";
import {connect} from 'react-redux';
import {updateMessage} from "../redux/reducers";

class AwesomeComp extends Component {
    componentDidMount() {
        fetchDataFromServer()
            .then(({ message }) => {
                this.props.method(message);
            });
    }
    render() {
        const { msg } = this.props;
        return (
            <div>
                { msg }
                <button onClick={() => this.props.dispatch({ type: 'CLEAR_MESSAGE' })}>
                    RESET MESSAGE
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    msg: state.message,
});

const mapDispatchToProps = dispatch => ({
    method: (message) => dispatch(updateMessage(message)),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeComp);
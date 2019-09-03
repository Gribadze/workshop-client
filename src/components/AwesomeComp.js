import React, { Component } from 'react';
import {fetchMessage} from "../services/localService";
import {connect} from 'react-redux';
import {MessageSelector, updateMessage} from "../redux/reducers/message.reducer";

class AwesomeComp extends Component {
    componentDidMount() {
        fetchMessage()
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
    // msg: state.message.message,
    msg: MessageSelector.getMessage(state.message),
    chCount: MessageSelector.getChangedCount(state.message),
});

const mapDispatchToProps = dispatch => ({
    method: (message) => dispatch(updateMessage(message)),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeComp);
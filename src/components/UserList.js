import React, {Component} from 'react';
import { connect } from 'react-redux';
import {UsersSelector} from "../redux/reducers/users.reducer";
import { UsersActions } from "../redux/reducers/users.reducer";
import Loading from "./Loading";
import {bindActionCreators} from "redux";

class UserList extends Component {
    componentDidMount() {
        const { getUserList } = this.props;
        getUserList();
    }

    render() {
        const { fetching, users } = this.props;

        if (fetching) {
            return <Loading />;
        }

        return (
            <div>
                {users.map(user => <div key={user.id}>
                    {user.name}
                </div>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: UsersSelector.getUsers(state.users),
    fetching: UsersSelector.getFetching(state.users),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ...UsersActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
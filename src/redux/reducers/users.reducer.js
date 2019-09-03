import { createActions, handleActions, combineActions } from 'redux-actions';
import {fetchDataFromServer} from "../../services/localService";

const GET_USER_LIST = 'GET_USER_LIST';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const ADD_USER = 'ADD_USER';

const initialState = {
    data: [],
    fetching: false,
};

const {
    getUserList,
    updateUser,
    deleteUser,
    addUser,
    userRequest,
    userRequestSuccess,
    userRequestFailure,
} = createActions(
    GET_USER_LIST,
    UPDATE_USER,
    DELETE_USER,
    ADD_USER,
    'USER_REQUEST',
    'USER_REQUEST_SUCCESS',
    'USER_REQUEST_FAILURE'
);

export const UsersActions = {
    getUserList: () => (dispatch) => {
        dispatch(userRequest());
        fetchDataFromServer()
            .then(users => {
                console.log('data fetched', users);
                dispatch(userRequestSuccess());
                dispatch(getUserList(users));
            })
            .catch(() => {
                dispatch(userRequestFailure());
            });
    },
    updateUser,
    deleteUser,
    addUser,
    userRequest,
    userRequestSuccess,
    userRequestFailure,
};

export const UsersSelector = {
    getUsers: (state) => state.data,
    getFetching: (state) => state.fetching,
};

export const usersReducer = handleActions({
    [getUserList]: (state, { payload }) => {
        console.log('usersReducer', payload);
        return ({ ...state, data: payload });
    },
    [updateUser]: (state, { payload }) => ({
        ...state,
        data: state.data.map(user => {
            if (user.id === payload.id) {
                return payload;
            }
            return user;
        })
    }),
    [deleteUser]: (state, { payload }) => ({ ...state, data: state.data.filter(user => user.id !== payload.id) }),
    [addUser]: (state, { payload }) => ({ ...state, data: state.data.concat(payload) }),
    [userRequest]: (state) => ({ ...state, fetching: true }),
    [combineActions(userRequestSuccess, userRequestFailure)]: (state) => ({ ...state, fetching: false }),
}, initialState);



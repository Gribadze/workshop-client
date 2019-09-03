import { createActions, handleActions } from 'redux-actions';

const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

const initialState = {
    message: '',
    changeStateCount: 0,
};

export const MessageSelector = {
    getMessage: (state) => state.message,
    getChangedCount: (state) => state.changeStateCount,
};

export const { updateMessage, clearMessage } = createActions(
    {
        [UPDATE_MESSAGE]: (message) => ({ message }),
    }, CLEAR_MESSAGE
);

export const messageReducer = handleActions({
    [updateMessage]: (state, { payload: { message }}) => ({ message, changeStateCount: state.changeStateCount + 1 }),
    [clearMessage]: (state) => ({ ...initialState, changeStateCount: state.changeStateCount + 1 }),
}, initialState);

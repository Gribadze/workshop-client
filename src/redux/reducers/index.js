const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    payload: message,
});

export function reducer(state, action) {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return { message: action.payload };
        case CLEAR_MESSAGE:
            return { message: '' };
        default:
            return state;
    }
}
import authReducer from "../../reducers/auth";

test('should set uid for button', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abcxyz321'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'hsog345285ksgkjg'}, action);
    expect(state).toEqual({});
});
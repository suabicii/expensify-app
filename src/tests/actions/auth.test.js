import {login, logout} from "../../actions/auth";

test('should generate button action object', () => {
    const uid = '123xyz';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
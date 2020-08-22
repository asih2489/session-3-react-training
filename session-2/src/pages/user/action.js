export const login = (data) => ({
    type: "LOGIN",
    payload: data,
});

export const register = (data) => ({
    type: "REGISTER",
    payload: data,
});

export const logout = (data) => ({
    type: "LOGOUT",
});
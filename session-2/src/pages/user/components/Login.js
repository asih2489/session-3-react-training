import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../action';

const Login = ({ setOpen }) => {
    const dispatch = useDispatch();
    return (
        <>
            <h3>Login</h3>
            <hr />
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={
                    (values) => dispatch(login({
                        email: values.email,
                        password: values.password,
                        fullname: 'Rifqi'
                    }))
                }
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    /* and other goodies */
                }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <button type="submit">
                                Loggin
                            </button>
                            <br />
                            <a onClick={() => setOpen(true)}>
                                <p>Register</p>
                            </a>
                        </form>
                    )}
            </Formik>
        </>
    )
}

export default Login;

import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../action';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Register = ({ setOpen }) => {
    const dispatch = useDispatch();
    const RegisterSchemaValidation = Yup.object().shape({
        fullname: Yup.string()
          .min(5, 'fullname Too Short!')
          .max(50, 'fullname Too Long!')
          .required('fullname is required'),
        email: Yup.string()
            .email("email not valid")
            .required('email is required'),
        password: Yup.string()
            .min(5, 'password min 5 caracter')
            .required('password is required')
    });
    const formRegister = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
        },
        validationSchema: RegisterSchemaValidation,
        onSubmit: (values) => {
            dispatch(register(values))
        },
    })
    return (
        <form onSubmit={formRegister.handleSubmit}>
            <div 
                style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%', padding: 20, }}
            >
                <input
                    type="fullname"
                    name="fullname"
                    placeholder="full name"
                    onChange={formRegister.handleChange}
                    value={formRegister.values.fullname}
                    style={{ marginBottom: 20 }}
                />
                {
                   (formRegister.touched.fullname && formRegister.errors.fullname ) && (<p style={{ color: 'red' }}>{formRegister.errors.fullname}</p>)
                }
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={formRegister.handleChange}
                    value={formRegister.values.email}
                    style={{ marginBottom: 20 }}
                />
                {
                    formRegister.errors.email && (<p style={{ color: 'red' }}>{formRegister.errors.email}</p>)
                }
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={formRegister.handleChange}
                    value={formRegister.values.password}
                    style={{ marginBottom: 20 }}
                />
                {
                    formRegister.errors.password && (<p style={{ color: 'red' }}>{formRegister.errors.password}</p>)
                }
            </div>
            <button type="submit">
                Register
            </button>
            <br />
            <a onClick={() => setOpen(false)}>
                <p>Login</p>
            </a>
        </form>
    );
};

export default Register;
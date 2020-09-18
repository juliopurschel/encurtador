import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from 'yup';

import './login.css';

import Api from '../../api';
import  history  from '../../history';



const Login = () => {


    const handleSubmit = values => {

        Api.get(`/users/${values.login}`).then(resp => {
            const { data } = resp;
            if (data) {
                if (data.pass === values.password) {
                    localStorage.setItem('app-token', data._id)
                    history.push('/home')
                    history.go()}
                else {
                    alert('Senha errada');
                }
            }else {
                alert('Usuario não encontrado!');
            }
        });




    }
    const validations = yup.object().shape({
        login: yup.string().required(),
        password: yup.string().min(1).required()
    })
    return (
        <>
            <h1>Login</h1>
            <p>Fill the fields to continue</p>
            <Formik
                initialValues={{ login: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Form-Group">
                        <Field
                            name="login"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="login"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Form-Group">
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                    <Link className="Reg-Btn" to="/register" > Cadastrar </Link>
                    
                   
                </Form>
            </Formik>
            
            
        </>
    )
}
export default Login;
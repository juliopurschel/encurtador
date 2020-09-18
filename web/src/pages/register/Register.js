import React from 'react'


import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup';

import './register.css';

import Api from '../../api';
import history from '../../history';

const Register = () => {

    const handleSubmit = values => {

        Api.get(`/users/${values.login}`).then(resp => {
            const { data } = resp;
            if (data) {
              return alert("Usuário já existe");
            } else 
            Api.post(`/users/`, {
                name: values.name,
                login: values.login,
                pass: values.password
            }).then(function (response) {
                const { data } = response
                localStorage.setItem('app-token', data._id)
                history.push('/home')
                alert("cadastro feito com sucesso")
                history.go()
            }).catch(function (error) {
                console.log(error)
            });
        });



     

    }
    const validations = yup.object().shape({
        name: yup.string().required(),
        login: yup.string().required(),
        password: yup.string().min(1).required()
    })
    return (
        <>
            <h1>Register</h1>
            <p>Fill the fields to registration</p>
            <Formik
                initialValues={{ name: '', login: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Register">
                    <div className="Form-Group">
                        <p>Nome</p>
                        <Field
                            name="name"
                            className="Register-Form"
                        />
                        <ErrorMessage
                            component="span"
                            name="name"
                            className="Register-error"
                        />
                    </div>
                    <div className="Form-Group">
                        <p>Login</p>
                        <Field
                            name="login"
                            className="Register-Form"
                        />
                        <ErrorMessage
                            component="span"
                            name="login"
                            className="Register-error"
                        />
                    </div>
                    <p>Senha</p>
                    <div className="Form-Group">
                        <Field
                            name="password"
                            className="Register-Form"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Register-error"
                        />
                    </div>
                    <button className="Register-Btn" type="submit">Cadastrar</button>
                </Form>
            </Formik>
        </>
    )






}

export default Register;
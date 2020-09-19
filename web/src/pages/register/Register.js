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
                    history.push('/')
                    alert("cadastro feito com sucesso")
                    history.go()
                }).catch(function (error) {
                    console.log(error)
                });
        });





    }
    const validations = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        login: yup.string().required('Usuário obrigatório'),
        password: yup.string().min(6).required('Senha obrigatória')
    })
    return (
        <>

            <div className="corpo">
                <Formik
                    initialValues={{ name: '', login: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Register">
                        <h2>Register</h2>
                        <div className="Form-Group">
                            <label>Nome</label>
                            <Field
                                name="name"
                                className="Register-Form"
                            />
                            <ErrorMessage
                                component="span"
                                name="name"
                                className="Register-Error"
                            />
                        </div>
                        <div className="Form-Group">
                            <label>Usuário</label>
                            <Field
                                name="login"
                                className="Register-Form"
                            />
                            <ErrorMessage
                                component="span"
                                name="login"
                                className="Register-Error"
                            />
                        </div>
                        <label>Senha</label>
                        <div className="Form-Group">
                            <Field
                                name="password"
                                className="Register-Form"
                            />
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="Register-Error"
                            />
                        </div>
                        <button className="Register-Btn" type="submit">Cadastrar</button>
                    </Form>
                </Formik>
            </div>
        </>
    )






}

export default Register;
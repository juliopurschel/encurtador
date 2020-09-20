import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from 'yup';

import './login.css';

import Api from '../../api';
import history from '../../history';


const Login = () => {


    const handleSubmit = values => {

        Api.get(`/users/${values.login}`).then(resp => {
            const { data } = resp;
            if (data) {
                if (data.pass === values.password) {
                    localStorage.setItem('app-token', data._id)
                    history.push('/home')
                    history.go()
                }
                else {
                    alert('Senha errada');
                }
            } else {
                alert('Usuario não encontrado!');
            }
        });

    }
    const validations = yup.object().shape({
        login: yup.string().required('Usuário obrigatório'),
        password: yup.string().min(6).required('A senha deve conter no mínimo 6 caracteres')
    })
    return (
        <div>
            <div className="corpo">
                <Formik
                    initialValues={{ login: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >

                    <Form className="Login">
                        <h2> Login</h2>
                        <div className="Form-Group">
                            <label>Usuário:</label>
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
                            <label> Senha:</label>
                            <Field
                                name="password"
                                className="Login-Field"
                                type="password"
                            />
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="Login-Error"
                            />
                        </div>
                        <button className="Login-Btn" type="submit">Entrar</button>
                        <p className="message">Ainda não possui cadastro?  <Link className="Reg-Btn" to="/register" > Criar conta </Link></p>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default Login;
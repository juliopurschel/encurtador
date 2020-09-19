import React from 'react'


import { ErrorMessage, Formik, Form, Field } from 'formik'


import { Link } from 'react-router-dom'
import history from '../../history';

import * as yup from 'yup';

import './home.css';

import Api from '../../api';


import { BitlyClient } from 'bitly';
const bitly = new BitlyClient('66a204b3111cd380fb8fa50729c464cc251406c5', {});


const userID = localStorage.getItem('app-token')



const Login = () => {



    async function example(url) {

        const response = await bitly.shorten(url.url)


        if (response.id) {
            document.querySelector(".cutURL").innerHTML = ` Seu Link: ${response.id}`;
            Api.post(`/urls/`, {
                url: url.url,
                cutUrl: response.id,
                user: userID
            })
        } else {
            alert('Erro inesperado, tente novamente')
        }

    }

    const validations = yup.object().shape({
        url: yup.string().required('É necessária uma URL'),

    })
    return (


        <>
            <div className="corpo">
                
               
                
                <Formik
                    initialValues={{ url: '' }}
                    onSubmit={example}
                    validationSchema={validations}
                >
                    <Form className="url">
                    <h2>Encurtador</h2>
                     <p className="cutURL"></p>
                        <div className="comment">Insira aqui o link que deseja encurtar</div>
                        
                        <div className="Form-Group">
                            <Field
                                name="url"
                                className="url-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name="url"
                                className="url-Error"
                            />
                        </div>
                        <button className="url-Btn" type="submit">gerar</button>    
                        <p className="message"> <Link className="Reg-Btn" to="/historic" > Histórico </Link></p>

                    </Form>
                </Formik>
            </div>





        </>
    )
}
export default Login;
import React from 'react'


import { ErrorMessage, Formik, Form, Field } from 'formik'



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

        console.log(response);

        if (response.id) {
            alert(`Url Gerada: ${response.link}`)
            Api.post(`/urls/`, {
                url: url.url,
                cutUrl: response.id,
                user: userID
            }).then(function (response) {
                history.push('/historic')
                history.go()

            })

        } else {
            alert('Erro inesperado, tente novamente')
        }



    }

    const validations = yup.object().shape({
        url: yup.string().required(),

    })
    return (


        <>

            <p>Utilize a URL que deseja encurtar</p>
            <Formik
                initialValues={{ url: '' }}
                onSubmit={example}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Form-Group">
                        <Field
                            name="url"
                            className="Url-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="login"
                            className="Url-Error"
                        />
                    </div>
                    <button className="Url-Btn" type="submit">gerar</button>

                </Form>
            </Formik>






        </>
    )
}
export default Login;
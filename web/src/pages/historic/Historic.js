import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom'

import Api from '../../api';
import history from '../../history';

import backIcon from '../../assets/back.svg';
import Logout from '../../assets/logout.svg';
import './historic.css'

const userID = localStorage.getItem('app-token')

export default class Historic extends Component {
    state = {
        urls: [],
    };

    loadurls = async () => {
        const response = await Api.get(`/urls/${userID}`);
        this.setState({ urls: response.data });

    };

    async componentDidMount() {
        this.loadurls();

    }

    logout() {
        localStorage.clear()
        history.push('/')
        history.go()

    }

    render() {
        const { urls } = this.state;
        urls.reverse();

        return (
            <>
                <div className="corpoh">
                    <div className="top">
                        <Link to="/home">
                            <img src={backIcon} alt="Voltar" />
                        </Link>
                        <h1> Histórico</h1>
                        <Link to="#" onClick={this.logout} alt="Logout" className="logout" >
                            <img src={Logout} alt="Voltar" />
                        </Link>
                    </div>

                    <div className="table-wrapper">
                        <table class="fl-table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">URL</th>
                                    <th scope="col">Url Curta</th>
                                    <th scope="col">Data/hora</th>
                                </tr>
                            </thead>
                            {urls.map(url => (
                                <tbody>
                                    <tr key={url._id}>
                                        <td>{url.url}</td>
                                        <td>{url.cutUrl}</td>
                                        <td> {Moment(url.createdAt).format("DD/MM/YYYY")} | {Moment(url.createdAt).format("HH:MM")} </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
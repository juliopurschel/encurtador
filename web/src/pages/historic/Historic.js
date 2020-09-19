import React, { Component } from 'react';
import Api from '../../api';
import Moment from 'moment';

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
    render() {
        const { urls } = this.state;
        urls.reverse();

        return (
            <>
            
            <div className="corpoh">
            <h2> Histórico</h2>
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
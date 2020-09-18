import React, { Component } from 'react';
import Api from '../../api';

const userID = localStorage.getItem('app-token')

export default class Historic extends Component {
    state = {
        urls: [],
    };

    loadProducts = async () => {
        const response = await Api.get(`/urls/${userID}`);
         this.setState({urls: response.data});

    };

    async componentDidMount() {
        this.loadProducts();
        
    }
    render() {
        const { urls } = this.state;
        console.log(this.state)
        return (
            <div className="product-list">
            {urls.map(product => (
               <article key={product._id}>
                   <strong>{product.url}</strong>
                   <p>{product.cutUrl}</p>
                  

               </article>
            ))}
           
        </div>


        )
    }
}
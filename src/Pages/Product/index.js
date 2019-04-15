import React, { Component } from 'react';
import Api from '../../Services/api';
import './style.css'


export default class Product extends Component{
    state = {
           product: {},
    };

   async componentDidMount()  {

        const { id } = this.props.match.params;   
        const response = await Api.get(`/products/${id}`);

        this.setState({product: response.data});
    }
    render() {

        const { product } = this.state;

        return(
            <div className="productInfo">
              <h1>{product.title}</h1>
              <p>{product.description}</p>

              <p>
                  URL: <a href={product.url}>{product.url}</a>
              </p>
            </div>
        );
    }
}

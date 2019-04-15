import React, { Component } from 'react';
import Api from '../../Services/api'
import {Link} from 'react-router-dom';
import "./style.css"


export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
       const response = await Api.get(`/products?page=${page}`);
       const { docs, ...productInfo} = response.data;
       this.setState({products: docs, productInfo});         
    };

    prevPage = () =>{

    };

    nextPage = () => {
       const {page, productInfo} = this.state;

       if(page === productInfo.pages) return;

       const pageNumber = page + 1;

       this.loadProducts(pageNumber);

    };

    render(){

        const {products} = this.state;
        return(
           <div className="list-products">
            {products.map(product =>(
                <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button onClick={this.prevPage}>Anterior</button>
                <button onClick={this.nextPage}>Próximo</button>
            </div>
           </div>
        );
    }
}
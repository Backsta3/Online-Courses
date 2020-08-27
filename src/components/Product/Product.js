import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
    const {img, name, seller, price, stock}= props.product ;
    return (
        <div className="product  d-flex  row align-items-center  card-deck">
            <div className="col-md-5 card ">
                <img src={img} />
            </div>
            
            <div className="col-md-7 card ">
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller} </small></p>
                <p>${price}</p>
                <p><small> Only {stock} left - order soon </small></p>
                <button className="product-button" onClick={()=> props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now </button>
            </div>
            
         
        </div>
    );
};

export default Product;
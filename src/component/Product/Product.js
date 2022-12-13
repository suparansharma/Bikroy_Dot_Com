import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product,handleAddtoCart}) => {
    
    const{name,img,seller,price,ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddtoCart(product)}  className='btn-cart'>
                <p  className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button> 
        </div>
    );
};

export default Product;
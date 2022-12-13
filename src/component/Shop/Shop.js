import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useProducts from './../Hooks/useProducts';
import { Link } from 'react-router-dom';
const Shop = () => {
    const[products,setProducts] = useProducts();
    const [cart,setCart] = useState([]);
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity= quantity;
                savedCart.push(addedProduct);
                console.log(addedProduct);
            }
        }
        setCart(savedCart);

    },[products])

    const handleAddtoCart =(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct]
        }

        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id) 
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
               products.map(product=>
                <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}/>
               ) 
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <Link to="/orders">
                    <button>Review Order</button>
                </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;
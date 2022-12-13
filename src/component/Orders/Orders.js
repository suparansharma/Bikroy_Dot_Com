import React from 'react';
import useProducts from './../Hooks/useProducts';
import useCart from './../Hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemoveProduct =product =>{
        console.log(product);
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    let navigate = useNavigate();
    return (
   <div className="shop-container">
    <div className="review-items-container">
        {
            cart.map(product=><ReviewItem handleRemoveProduct={handleRemoveProduct} product={product} key={product.id}/>)
        }
    </div>
    <div className="cart-container">
        <Cart cart={cart}>
            <button onClick={()=>navigate('/inventory')}>Proceed Checkout</button>
        </Cart>
    </div>
   </div>
    );
};

export default Orders;
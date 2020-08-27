import React, { useState } from 'react';
import fakeData from '../../fakeData/'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first11 = fakeData.slice(0,11);
    const [products, setProducts] = useState(first11);
    const [cart, setCart]= useState([]);

    const handleAddProduct = (product) =>{
        const newCart= [...cart, product]
        setCart(newCart);
    }
    return (
        <div className=" d-flex bd-highlight justify-content-between align-items-center " >

            <div className="p-2 w-100 bd-highlight flex-sm-{grow|shrink}-1 flex-{grow|shrink}-0 courses-container col-sm-8" >
                           
                <ul >
                    {
                        products.map(pd => <Product 
                            handleAddProduct= {handleAddProduct}
                            product={pd}>
                             </Product>)
                    }
                </ul>
            </div>   
            <div className="p-2 flex-shrink-1 bd-highlight flex-sm-{grow|shrink}-1 flex-{grow|shrink}-1 cart-container col-sm-4"  >
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;
import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd) => total + prd.price ,0 );
    return (
        <div>
            <h4>Courses</h4>
            <p>Course Ordered: {cart.length}</p>
            <p>Purchase Total Price: $ {total}</p>
        </div>
        
        
    );

};

export default Cart;
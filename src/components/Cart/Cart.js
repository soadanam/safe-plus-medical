import React from 'react';
import useAuth from './../../Hooks/useAuth';



const Cart = () => {
    const { signOutAuth } = useAuth();

    return (
        <div>
            <h1>This  is  PROTECTED Component, Cart !!</h1>

            <button onClick={signOutAuth} className="btn btn-danger"> Sign OUT </button>

        </div>
    );
};

export default Cart;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux'
import product from './Product';

const Cart = () => {
    let handleButton;
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                <div className="cold-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                        {product.qty} X ${product.price} = $
                        {product.qty * product.price}
                    </p>
                    <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

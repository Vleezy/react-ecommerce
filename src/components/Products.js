import React, { Component } from 'react'
import moneySign from '../moneySign'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.product.map(product =>
                        <li key={product.id}>
                            <div className="product">
                                <a href={"#" + product.id}>
                                <img src={product.image} alt={product.title}></img>
                                <p>
                                    {product.title}
                                </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {/* TO ADD DOLLAR SIGN TO PRICE */}
                                        {moneySign(product.price)}
                                        {/* $ {product.price} */}
                                    </div>
                                    {/* Arrow function where we pass product through Cart */}
                                    <button onClick={()=>this.props.addToCart(product)} className="button primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}

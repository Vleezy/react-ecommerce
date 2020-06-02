import React, { Component } from 'react'
// import moneySign from '../moneySign'


// CLASS COMPONENT + EXPORT 
export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {/* GET LIST OF PRODUCTS AS PROP FROM PARENT COMPONENT */}
                    {this.props.product.map(product =>
                        <li key={product.id}>
                            {/* EACH PRODUCT : UNIQUE KEY LIST (keeps track) IS BEING ALTERED BY IN MAPS */}
                            <div className="product">
                                {/* GIVE ID# TO HREF */}
                                <a href={"#" + product.id}>
                                    {/* PRODUCT IMAGE */}
                                <img src={product.image} alt={product.title}></img>
                                <p>
                                    {/* PRODUCT TITLE  */}
                                    {product.title}
                                </p>
                                </a>
                                {/* PRODUCT DESC */}
                                <p className="product-description">{product.description}</p>

                                <div className="product-price">
                                    <div>
                                        {/* TO ADD DOLLAR SIGN TO PRICE */}
                                        {/* {moneySign(product.price)} */}

                                        {/* PRODUCT PRICE */}
                                        $ {product.price}
                                    </div>
                                    {/* Arrow function event listener where we pass product through Cart */}
                                    {/* product button in app.js */}
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

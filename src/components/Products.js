import React, { Component } from 'react';
// import moneySign from '../moneySign';
//npm i react-reveal for animations
import Fade from 'react-reveal/Fade';
//npm i react-modal for images
import Modal from 'react-modal';
//react-reveal zoom animation
import Zoom from "react-reveal/Zoom";


// CLASS COMPONENT + EXPORT 
export default class Products extends Component {
    // hide or show modal we define a constructor
    constructor(props){
        super(props);
        // initial value for modal if product exist show it if not don't
        this.state = {
            product: null,
        };
    }
    // Sets product to null/none to close modal
    closeModal =() =>{
        this.setState({product: null});
    };
    // method/function running this line of code fills the state product with onClick
    openModal = (product) => {
        this.setState({product});
    };
    render() {
        // modal 
        const {product} = this.state;
        return (
            <div>
            {/* Animation fade using react-reveal */}
            <Fade bottom cascade>
                <ul className="products">
                    {/* GET LIST OF PRODUCTS AS PROP FROM PARENT COMPONENT */}
                    {this.props.product.map(product =>
                    // key = new identity per to notice change
                        <li key={product.id}>
                            {/* EACH PRODUCT : UNIQUE KEY LIST (keeps track) IS BEING ALTERED BY IN MAPS */}
                            <div className="product">
                                {/* GIVE ID# TO HREF */}
                                <a href={"#" + product.id} onClick={() => this.openModal(product)}>
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
                </Fade>
                {/* Conditional rendering for modal */}
                {product && (
                <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Zoom>
                    <button className="close-modal" onClick={this.closeModal}>x</button>
                    <div className="product-details">
                    <img className="product-img" src={product.image} alt={product.title} ></img>
                    <div className="product-details-description">
                    <p>
                    <strong>{product.title}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>
                    Available Packages:{" "}
                    {product.availableSizes.map(x => (
                        <span> 
                        {" "}
                         <button className="button">{x}</button>
                        </span>
                                ))}
                    </p>
                    <div className="prooduct-price">
                    <div>
                    ${(product.price)}</div>
                    <button className="button primary" onClick={() =>{
                        this.props.addToCart(product);
                        this.closeModal();
                    }}> Add To Cart </button>
                    </div>
                    </div>
                    </div>
                    {/* <div>Modal</div> */}
                    </Zoom>
                </Modal>
                    )}
            </div>
        )
    }
}

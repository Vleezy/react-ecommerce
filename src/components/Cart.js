import React, { Component } from "react";
// import moneySign from '../moneySign'

// CLASS COMPONENT + EXPORT
export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
    name:"",
    email:"",
    address:"",
    // by default checkout isn't shown
    showCheckout: false,
    };
  }
  //Handle function that updates state of component
  handleInput = (e) =>{
    this.setState({[e.target.name]: e.target.value })
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order)
  };
  render() {
    // getting cartItems from parent component
    const { cartItems } = this.props;
    return (
      <div>
          {/* first condition: cart empty */}
        {cartItems.length === 0 ? ( <div className="cart cart-header">Cart is empty</div>) :  
        (<div className="cart cart-header"> You have {cartItems.length} in the cart{" "}</div>)}
        {/* second condition^: cart length is # you have in cart */}
        
        <div>
          {/* CART Product CARD */}
          <div className="cart">
            <ul className="cart-items">
              {/* Each item converts */}
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    
                   {/* 3rd bottom section */}
                    <div className="right">
                      {/* {moneySign(item.price)} x {item.count}{" "} */}
                     $ {item.price} x {item.count}{" "}
                      <button className="button" onClick={() => this.props.removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {cartItems.length !== 0 && (
            <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {/* {moneySign(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )} */}

                  {/* a = accumulator c = current show total*/}
                  $ {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                </div>
                {/* Prompts the form with an onClick */}
                <button onClick={()=>{this.setState({showCheckout: true})
                }} className="button primary">Purchase</button>
              </div>
            </div>
             {/* Creating form */}
            {this.state.showCheckout && (
              <div className="cart">
              <form onSubmit={this.createOrder}>
              <ul className="form-container">
              <li>
              <label>Email:</label>
              <input name="email" type="email" required onChange={this.handleInput}></input>
              </li>
              <li>
              <label>Name:</label>
              <input name="name" type="text" required onChange={this.handleInput}></input>
              </li>
              <li>
              <label>Address:</label>
              <input name="address" type="text" required onChange={this.handleInput}></input>
              </li>
              <li>
              <button className="button primary" type="submit">Checkout</button>
              </li>
              </ul>
              </form>
              </div>
            )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

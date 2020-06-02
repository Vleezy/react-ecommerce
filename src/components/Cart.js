import React, { Component } from "react";
// import moneySign from '../moneySign'

// CLASS COMPONENT + EXPORT
export default class Cart extends Component {
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
                <button className="button primary">Purchase</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

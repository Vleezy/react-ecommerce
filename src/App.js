import React from 'react';
import data from "./data";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footers from './components/Footers';
// import logo from './logo.svg';
// import './App.css';

//CLASS COMPONENT
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }
  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
        // get rid of current product selected to remove
    this.setState({cartItems:cartItems.filter((x)=>x.id !=product.id),
    });
  };
  // Clone copy of cart items inside state
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    // If already exist update the number of carts
    cartItems.forEach((item) =>{
      if (item.id === product.id){
      item.count++;
      alreadyInCart = true;
    }
  });
  if(!alreadyInCart){
    cartItems.push({...product, count: 1});
  }
  this.setState({cartItems});
};
  //Implement the logic of sort and filter
  //event parameter comes to the function
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => 
        sort === "lowest" ?
          a.price > b.price ? 1 : -1 :
          sort === "highest" ?
            a.price < b.price ? 1 : -1 :
            a.id < b.id ? 1 : -1
      ),
    }));
  };
  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        //Make sure that the right size is in the array
        products: data.products.filter
          (product => product.availableSizes.indexOf(event.target.value) >= 0
          ),
      });
    }
  };


  render() {
    return (
      <div className="grid-container">
        <header>
          {/* <a href="/">Cookie Shop</a> */}
          <Navbar>Vlad</Navbar>
        </header>
        <main>
          <div className="content">
            <div className="main">
              {/* Passing size and sort to filter as property components + function handles changing size and sort*/}
             {/* FILTER COMPONENT */}
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}>
              </Filter>
              {/* Products component */}
              <Products 
              product={this.state.products} 
              addToCart={this.addToCart}>
              </Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
              </div>
          </div>
        </main>
        <footer>
          {/* FOOTER COMPONENT */}
          <Footers></Footers>
        {/* &copy;2020 | R2H ECOMMERCE */}
    </footer>
      </div>
    );
  }
}

export default App;

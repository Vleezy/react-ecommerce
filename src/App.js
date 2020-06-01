// IMPORTS FOR MY APP
import React from 'react';
import data from "./data";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footers from './components/Footers';
import Showcase from './components/Showcase';
import Logo from './components/Logo';
// import logo from './logo.svg';
// import './App.css';

//CLASS COMPONENT
class App extends React.Component {
  constructor() {
    super();
    //DEFAULT VALUE FOR STATE COMPONENT
    this.state = {
      products: data.products,
      cartItems: [],
      //EMPTY BY DEFAULT
      size: "",
      sort: "",
    };
  }

  // CART FUNCTIONS

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    // get rid of current product selected to remove
    this.setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    });
  };
  // Clone copy of cart items inside state
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    // If already exist update the number of carts
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  // FILTER FUNCTIONS

  // LOGIC OF SORT//FILTER IN FUNCTIONS
  //event parameter comes to the function
  sortProducts = (event) => {
    // making a variable for sort
    const sort = event.target.value;
    //READ VALUE SELECTED 
    console.log(event.target.value);
    // STATE that returns an OBJECT as new state
    this.setState((state) => ({
      sort: sort,
      //MOVING PRODUCT IN ARRAY BASED ON INDEX
      // comparing two parameters and returning a new object
      products: this.state.products.slice().sort((a, b) =>
      // moving product in array based on index
        sort === "lowest" ? a.price > b.price ? 1 : -1 :
          sort === "highest" ? a.price < b.price ? 1 : -1 :
            // if none then based on id
            a.id < b.id ? 1 : -1
      ),
    }));
  };


  //  Sizes FUNCTION allows me to access setState method
  filterProducts = (event) => {
    console.log(event.target.value);
    // If empty it show show all products
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        //Function makes sure that the right size exists in availableSize array
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
          <div className="nav-container">
            {/* <a href="/">Cookie Shop</a> */}
            {/* LOGO COMPONENT */}
            <Logo></Logo>
            {/* NAV COMPONENT */}
            <Navbar></Navbar>
          </div>
        </header>

        <main>
          <div className="content">
            <div className="main">
              {/* HERO IMAGE */}
              <Showcase></Showcase>
              {/* Passing size and sort to filter as property components + function handles changing size and sort*/}
              {/* FILTER COMPONENT/ PARENT*/}
              {/* COUNT = product amount # */}
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                // Function to handle change
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}>
              </Filter>
              {/* PRODUCTS COMPONENT + PROPERTIES*/}
              <Products
                product={this.state.products}
                addToCart={this.addToCart}>
              </Products>
            </div>
            <div className="sidebar">
              {/* CART COMPONENT + PROPERTIES*/}
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
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

import React, { Component } from 'react'

// FILTER CLASS COMPONENT
export default class Filter extends Component {
    render() {
        return (
            // FILTER 1: SORT
            <div>
                <div className="filter">
                    {/* SHOWS AMOUNT OF PRODUCTS ON PAGE */}
                    <div className="filter-result">{this.props.count} Products</div>
                    <div className="filter-sort">
                        {/* CREATES A SPACE BETWEEN ORDER AND INPUT BOX */}
                Order {" "}
                        {/* DUMMY COMPONENT/ ANON FUNC : because it just passes size/sort from the parent component APP.JS*/}
                        {/* SELECT BOX WITH OPTIONS + handler */}
                        <select value={this.props.size} onChange={this.props.sortProducts}>
                           {/* FILTERED BY PRICE */}
                            <option>Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                    {/* FILTER 2: SIZES/AMOUNT */}
                    {/* LIST OF SIZES AND FILTERS  */}
                    <div className="filter-size">
                        Filter {" "}
                        <select value={this.props.size} onChange={this.props.filterProducts}>
                            {/* ALL VALUES FILTERED BY  */}
                            <option value="">ALL</option>
                            <option value="6">6 Cookies</option>
                            <option value="12">12 Cookies</option>
                            <option value="18">18 Cookies</option>
                            <option value="24">24 Cookies</option>
                            <option value="30">30 Cookies</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

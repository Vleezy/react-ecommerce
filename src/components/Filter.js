import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            // FILTER 1
            <div>
                <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    {/* CREATES A SPACE BETWEEN ORDER AND INPUT BOX */}
                Order {" "}
                {/* dummy component */}
                <select value={this.props.size} onChange={this.props.sortProducts}>
                   <option>Latest</option>
                   <option value="lowest">Lowest</option>
                   <option value="highest">Highest</option>
               </select>
                </div>

                {/* FILTER 2 */}
                <div className="filter-size">
                    Filter {" "}
                     <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
            </div>
        )
    }
}

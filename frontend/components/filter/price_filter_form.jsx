import React from 'react';


class PriceFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 10,
      maxPrice: 100000,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPrice = this.renderPrice.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('priceRange', this.state);
  }

  renderPrice(value) {
    return `$ ${this.state[value]}`;
  }

  update(price) {
    return e => {
      this.setState({[price]: parseInt(e.target.value)});
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <label> Min price:
            <input
              type="number"
              min="10"
              max="10000"
              placeholder=" x | { x >= 10, x <= y }"
              onChange={this.update('minPrice')}/>
          </label>
          <br/>
          <label> Max price:
            <input
              type="number"
              min="10"
              max="10000"
              placeholder="y | { y <= 10000, y >= x}"
              onChange={this.update('maxPrice')}/>
          </label>
          <br/>
          <input type="submit" value="Apply"/>
        </form>
      </div>
    );
  }
}


export default PriceFilterForm;

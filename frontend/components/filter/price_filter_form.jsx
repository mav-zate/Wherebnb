import React from 'react';
import Modal from 'react-modal';


const CANCEL_ICON = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/cancel_icon.png";

const customStyles = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '50%',
    bottom                : '50%',
    marginTop             : '135px',
    marginBottom          : '0',
    marginLeft            : '90px',
    marginRight           : '0',
    background            : '000',
    overflow              : 'visible',
    borderRadius          : '0',
    border                : 'none',
    width                 : '400px',
    height                : '180px',
  },
  overlay: {
    backgroundColor       : 'rgba(255, 255, 255, 0.5)',
  }
};


class PriceFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 10,
      maxPrice: 100000,
      modalIsOpen: false,
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPrice = this.renderPrice.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.minPrice > this.state.maxPrice) {
      this.setState({errors: ['Min price must be less than max price']});
      return;
    } else {
      this.toggleModal();
      this.setState({errors: []});
      this.props.updateFilter('priceRange', {
        minPrice: this.state.minPrice,
        maxPrice: this.state.maxPrice,
      });
    }
  }

  renderPrice(value) {
    return `$ ${this.state[value]}`;
  }

  update(price) {
    return e => {
      this.setState({[price]: parseInt(e.target.value)});
    };
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Price range</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <div className="filter-modal">
            <form onSubmit={this.handleSubmit}>
              <div className="errors">
                {
                  this.state.errors.map(err => <p>{err}</p>)
                }
              </div>
              <div className="filter-modal-div-price">
                <label> Min price:</label>
                  <input
                    type="number"
                    min="10"
                    max="10000"
                    placeholder="Minimum price is $10"
                    onChange={this.update('minPrice')}/>
              </div>
              <div className="filter-modal-div-price">
                <label> Max price:</label>
                  <input
                    type="number"
                    min="10"
                    max="10000"
                    placeholder="Go crazy!"
                    onChange={this.update('maxPrice')}/>
              </div>
              <div className="filter-modal-div-bottom">
                <span onClick={this.toggleModal}>
                  Cancel
                </span>
                <input
                  className="filter-modal-submit"
                  type="submit"
                  value="Apply"/>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}


export default PriceFilterForm;

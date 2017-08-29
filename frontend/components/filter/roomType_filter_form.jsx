import React from 'react';
import Modal from 'react-modal'


const CANCEL_ICON = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/cancel_icon.png";

const customStyles = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    bottom                : '0',
    marginTop             : '135px',
    marginBottom          : '0',
    marginLeft            : '0',
    marginRight           : '0',
    background            : '000',
    overflow              : 'visible',
    borderRadius          : '0',
    border                : 'none',
    width                 : '400px',
    height                : '220px',
  },
  overlay: {
    backgroundColor       : 'rgba(255, 255, 255, 0.5)',
  }
};


class RoomTypeFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entireHome: true,
      privateRoom: true,
      sharedRoom: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.evaluateCheckBoxes = this.evaluateCheckBoxes.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.evaluateCheckBoxes();
    this.toggleModal();
  }

  evaluateCheckBoxes() {
    let falseValues = {};
    if (!document.getElementById('is-entire-home-checked').checked) {
      falseValues.entireHome = false;
    }
    if (!document.getElementById('is-private-room-checked').checked) {
      falseValues.privateRoom = false;
    }
    if (!document.getElementById('is-shared-home-checked').checked) {
      falseValues.sharedRoom = false;
    }
    this.setState({
      entireHome: (falseValues.entireHome === undefined) ? true : false,
      privateRoom: (falseValues.privateRoom === undefined) ? true : false,
      sharedRoom: (falseValues.sharedRoom === undefined) ? true : false,
    }, () => this.props.updateFilter('roomType', this.state));
  }

  update(type) {
    return (e) => {
      if (e.target.checked) {
        this.setState({[type]: true});
      } else {
        this.setState({[type]: false});
      }
    };
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Room Type</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <div className="filter-modal">
            <form onSubmit={this.handleSubmit}>
              <div className="filter-modal-div">
                <label>
                  <input
                    id="is-entire-home-checked"
                    type="checkbox"
                    onChange={this.update('entireHome')}
                    value="true"
                    />
                  Entire home
                </label>
              </div>
              <div className="filter-modal-div">
                <label>
                  <input
                    id="is-private-room-checked"
                    type="checkbox"
                    onChange={this.update('privateRoom')}
                    value="true"/>
                  Private room
                </label>
              </div>
              <div className="filter-modal-div">
                <label>
                  <input
                    id="is-shared-home-checked"
                    type="checkbox"
                    onChange={this.update('sharedRoom')}
                    value="true"/>
                  Shared room
                </label>
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


export default RoomTypeFilterForm;

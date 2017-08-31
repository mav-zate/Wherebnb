import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';


const CANCEL_ICON = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/cancel_icon.png";

const customStyles = {
  content : {
    top                   : '5%',
    left                  : '5%',
    right                 : '5%',
    bottom                : '5%',
    marginTop             : '5%',
    marginBottom          : '5%',
    marginLeft            : '5%',
    marginRight           : '5%',
    background            : '000',
    overflow              : 'visible',
    borderRadius          : '0',
    border                : 'none',
    width                 : '400px',
    height                : '500px',
    transform             : 'translate(57%, -10%)',
    // position              : 'absolute',
  },
  overlay: {
    backgroundColor       : 'rgba(0, 0, 0, 0.75)',
  }
};


class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }


  render() {
     return(
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div id="session-form-parent">
          <img
            id="session-modal-close"
            onClick={this.closeModal}
            src={CANCEL_ICON}
          />
          <SessionFormContainer />
        </div>
        </Modal>
    );
  }
}


export default SessionModal;

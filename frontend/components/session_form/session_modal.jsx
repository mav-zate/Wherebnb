import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
          id=""
        >
        <div id="session-modal">
          <button onClick={this.closeModal}>X</button>
          <SessionFormContainer />
        </div>
        </Modal>
    );
  }
}


export default SessionModal;

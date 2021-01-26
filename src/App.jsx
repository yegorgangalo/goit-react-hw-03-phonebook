import React, { PureComponent } from 'react';
import ContactFormik from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './icon/close.svg';
import s from './App.module.css';
import { connect } from 'react-redux';
import * as contactsActions from './redux/contacts/contacts-actions';

class App extends PureComponent {

    state={
      showModal: false,
    }

    // componentDidMount(){
    //   const localStorageContacts = localStorage.getItem('contacts');
    //   const parsedContacts = JSON.parse(localStorageContacts);
    //   parsedContacts.length!==0 && this.props.getFromLocalStorage(parsedContacts);
    // }

    // componentDidUpdate(prevProps, prevState){
    //   // prevProps !== this.props && localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    //   prevProps.contacts.length !== 0 && this.props.contacts.length > prevProps.contacts.length && this.toggleModal();
    // }

    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
      }))
    }

    render() {
      const { showModal } = this.state;
      const { contacts, filter } = this.props;
      const { changeFilter, addContact } = this.props;

      return (
        <>
          <h1 className={s.title}>Phonebook</h1>
          <IconButton onClick={this.toggleModal} aria-label="Open Modal" classNames={s.iconButtonOpenModal}> Add Contact </IconButton>
          {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactFormik toggleModal={this.toggleModal} formSubmitHandler={addContact} contacts={contacts}/>
            <IconButton onClick={this.toggleModal} aria-label="Close Modal" classNames={s.iconButtonCloseModal}>
                <CloseIcon width="20" height="20" />
            </IconButton>
          </Modal>)}
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList/>
        </>
      )
    }
}

const mapStateToProps = ({contacts:{items, filter}}) => ({
  contacts: items ,
  filter: filter,
})

const mapDispatchToProps = (dispatch) => ({
  changeFilter: ({target:{value}}) => dispatch(contactsActions.changeFilter(value)),
  addContact: value => dispatch(contactsActions.addContact(value)),
  // getFromLocalStorage: value => dispatch(contactsActions.getFromLocalStorage(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

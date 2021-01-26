// import React, { PureComponent } from 'react';
import React, { useState } from 'react';
import ContactFormik from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './icon/close.svg';
import s from './App.module.css';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter } from './redux/contacts/contacts-selectors';
import * as contactsActions from './redux/contacts/contacts-actions';

function App () {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

    // state={
    //   showModal: false,
    // }

    // componentDidMount(){
    //   const localStorageContacts = localStorage.getItem('contacts');
    //   const parsedContacts = JSON.parse(localStorageContacts);
    //   parsedContacts.length!==0 && this.props.getFromLocalStorage(parsedContacts);
    // }

    // componentDidUpdate(prevProps, prevState){
    //   // prevProps !== this.props && localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    //   prevProps.contacts.length !== 0 && this.props.contacts.length > prevProps.contacts.length && this.toggleModal();
    // }

    // toggleModal = () => {
    //   this.setState(({ showModal }) => ({
    //     showModal: !showModal,
    //   }))
    // }

    const toggleModal = () => {
      setShowModal(val => !val);
    }

    const changeFilter = ({ target: { value } }) => dispatch(contactsActions.changeFilter(value));
    const addContact = value => dispatch(contactsActions.addContact(value));

    // render() {
      // const { showModal } = this.state;
      // const { contacts, filter } = this.props;
      // const { changeFilter, addContact } = this.props;

      return (
        <>
          <h1 className={s.title}>Phonebook</h1>
          <IconButton onClick={toggleModal} aria-label="Open Modal" classNames={s.iconButtonOpenModal}> Add Contact </IconButton>
          {showModal && (
          <Modal onClose={toggleModal}>
            <ContactFormik toggleModal={toggleModal} formSubmitHandler={addContact} contacts={contacts}/>
            <IconButton onClick={toggleModal} aria-label="Close Modal" classNames={s.iconButtonCloseModal}>
                <CloseIcon width="20" height="20" />
            </IconButton>
          </Modal>)}
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList/>
        </>
      )
    // }
}

// const mapStateToProps = ({contacts:{items, filter}}) => ({
//   contacts: items ,
//   filter: filter,
// })

// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: ({target:{value}}) => dispatch(contactsActions.changeFilter(value)),
//   addContact: value => dispatch(contactsActions.addContact(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
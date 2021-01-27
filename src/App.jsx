import React, { useState, useEffect } from 'react';
import ContactFormik from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './icon/close.svg';
import s from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter, getLoading } from './redux/contacts/contacts-selectors';
import * as contactsOperations from './redux/contacts/contacts-operations';
import * as contactsActions from './redux/contacts/contacts-actions';

function App () {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => dispatch(contactsActions.changeFilter(target.value));
  const addContact = (value) => dispatch(contactsOperations.addContact(value));

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch])

    const toggleModal = () => {
      setShowModal(value => !value);
    }

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
          <ContactList />
          {loading && <h1>is loading...</h1>}
        </>
      )
}

export default App;










// const mapStateToProps = ({contacts:{items, filter}}) => ({
//   contacts: items ,
//   filter: filter,
// })

// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: ({target:{value}}) => dispatch(contactsActions.changeFilter(value)),
//   addContact: value => dispatch(contactsActions.addContact(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);


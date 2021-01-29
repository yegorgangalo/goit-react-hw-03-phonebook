import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Context from 'components/Context';
import ContactFormik from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import s from './App.module.css';
import { IoClose } from 'react-icons/io5';
import { editContact, fetchContacts, getLoading, getError, getItems } from 'redux/contacts';
/* ----------------------------------------------------------------------- */

function App () {
  const [showModal, setShowModal] = useState(false);

  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const toggleModal = () => {
    setShowModal(value => !value);
  }

  const openFreshModal = () => {
    toggleModal();
    dispatch(editContact(null));
  }

      return (
        <>
          <h1 className={s.title}>Phonebook</h1>
          <IconButton onClick={openFreshModal} aria-label="Open Modal" classNames={s.iconButtonOpenModal}> Add Contact </IconButton>
          {showModal && (
            <Modal onClose={toggleModal}>
              <ContactFormik toggleModal={toggleModal}/>
              <IconButton onClick={toggleModal} aria-label="Close Modal" classNames={s.iconButtonCloseModal}>
                  <IoClose/>
              </IconButton>
            </Modal>
          )}
          <h2 className={s.title}>Contacts</h2>
          {contacts.length>1 && (<Filter/>)}
          <Context.Provider value={{toggleModal}}>
            <ContactList/>
          </Context.Provider>
          {loading && <h1>is loading...</h1>}
          {error && <h1>{error}</h1>}
          {/* {error && <h1>{error.message}</h1>} */}
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


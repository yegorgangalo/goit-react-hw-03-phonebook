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
import { fetchContacts, addContact, editContact, changeFilter, getItems, getFilter, getLoading, getError } from './redux/contacts';
/* ----------------------------------------------------------------------- */

function App () {
  const [showModal, setShowModal] = useState(false);
  const [contactEditInfo, setContactEditInfo] = useState(null);

  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onChangeFilter = ({ target }) => dispatch(changeFilter(target.value));
  const onAddContact = (value) => dispatch(addContact(value));
  const onEditContact = (value) => dispatch(editContact(value));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

    const toggleModal = (contactEditInfo=null) => {
      setShowModal(value => !value);
      setContactEditInfo(contactEditInfo);
    }

      return (
        <Context.Provider value={{toggleModal}}>
          <h1 className={s.title}>Phonebook</h1>
          <IconButton onClick={toggleModal} aria-label="Open Modal" classNames={s.iconButtonOpenModal}> Add Contact </IconButton>
          {showModal && (
          <Modal onClose={toggleModal}>
            <ContactFormik contactEditInfo={contactEditInfo} toggleModal={toggleModal} formSubmitHandler={{onAddContact, onEditContact}} contacts={contacts}/>
            <IconButton onClick={toggleModal} aria-label="Close Modal" classNames={s.iconButtonCloseModal}>
                <IoClose/>
            </IconButton>
          </Modal>)}
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={onChangeFilter} />
          <ContactList/>
          {loading && <h1>is loading...</h1>}
          {error && <h1>{error.message}</h1>}
        </Context.Provider>
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


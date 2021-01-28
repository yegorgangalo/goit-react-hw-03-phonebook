export {fetchContacts, addContact, deleteContact, editContact} from './contacts-operations';
export { getItems, getFilter, getLoading, getError } from './contacts-selectors';
export { changeFilter } from './contacts-actions';
export {default as contactsReducer} from './contacts-reducer'
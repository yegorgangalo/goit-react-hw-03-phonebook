// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3004';
import {
    getContactRequest, getContactSuccess, getContactError,
    addContactRequest, addContactSuccess, addContactError,
    deleteContactRequest, deleteContactSuccess, deleteContactError
} from './contacts-actions';

const BASE_URL = 'http://localhost:3004';

export const getContacts = () => (dispatch) => {

    dispatch(getContactRequest());

    fetch(`${BASE_URL}/contact`)
        .then(response => response.json())
        .then(data => dispatch(getContactSuccess(data)))
        .catch(error => dispatch(getContactError(error)));

    //  axios
    // .get('/contacts')
    // .then(data => dispatch(getContactSuccess(data)))
    // .catch(error => dispatch(getContactError(error)));
}

export const addContact = (contact) => (dispatch) => {

    dispatch(addContactRequest());

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
    }

    fetch(`${BASE_URL}/contacts`, options)
        .then(response => response.json())
        .then(data => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));

    //  axios
    // .post('/contacts', contact)
    // .then(data => dispatch(addContactSuccess(data)))
    // .catch(error => dispatch(addContactError(error)));
}

export const deleteContact = (id) => (dispatch) => {

    dispatch(deleteContactRequest());

    const options = {
        method: 'DELETE',
    }

    fetch(`${BASE_URL}/contacts/${id}`, options)
        .then(response => response.json())
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));

    //  axios
    // .delete(`/contacts/${id}`)
    // .then(() => dispatch(deleteContactSuccess(id)))
    // .catch(error => dispatch(deleteContactError(error)));
}
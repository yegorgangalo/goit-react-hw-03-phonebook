// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3004';
import {
    fetchContactRequest, fetchContactSuccess, fetchContactError,
    addContactRequest, addContactSuccess, addContactError,
    deleteContactRequest, deleteContactSuccess, deleteContactError,
    patchContactRequest, patchContactSuccess, patchContactError
} from './contacts-actions';

const BASE_URL = 'http://localhost:3004';

export const fetchContacts = () => (dispatch) => {
    dispatch(fetchContactRequest());
    fetch(`${BASE_URL}/contacts`)
        .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error ${response.status}. ${response.statusText}`)))
        .then(data => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)));

    //  axios
    // .fetch('/contacts')
    // .then(data => dispatch(fetchContactSuccess(data)))
    // .catch(error => dispatch(fetchContactError(error)));
}

export const addContact = (contact) => (dispatch) => {
    dispatch(addContactRequest());
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
    }
    fetch(`${BASE_URL}/contacts`, options)
        .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error ${response.status}. ${response.statusText}`)))
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
        .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error ${response.status}. ${response.statusText}`)))
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));

    //  axios
    // .delete(`/contacts/${id}`)
    // .then(() => dispatch(deleteContactSuccess(id)))
    // .catch(error => dispatch(deleteContactError(error)));
}

export const patchContact = (contact) => (dispatch) => {
    dispatch(patchContactRequest());
    const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
    }
    fetch(`${BASE_URL}/contacts/${contact.id}`, options)
        .then(response => response.ok ?
            response.json() :
            Promise.reject(new Error(`Error ${response.status}. ${response.statusText}`)))
        .then(data => dispatch(patchContactSuccess(data)))
        .catch(error => dispatch(patchContactError(error)));

    //  axios
    // .post(`/contacts/${id}`, contact)
    // .then(data => dispatch(patchContactSuccess(data)))
    // .catch(error => dispatch(patchContactError(error)));
}
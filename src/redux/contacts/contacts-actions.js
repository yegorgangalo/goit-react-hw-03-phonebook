import actionTypes from './contacts-types';

const { ADD, DELETE, GET, FILTER_CHANGE } = actionTypes;

export const addContact = (newContact) => ({
    type: ADD,
    payload: newContact,
});

export const deleteContact = (id) => ({
    type: DELETE,
    payload: id,
});

// export const changeFilter = ({ target: { value } }) => ({
export const changeFilter = (value) => ({
    type: FILTER_CHANGE,
    payload: value,
});

export const getFromLocalStorage = (contactsArray) => ({
    type: GET,
    payload: contactsArray,
});
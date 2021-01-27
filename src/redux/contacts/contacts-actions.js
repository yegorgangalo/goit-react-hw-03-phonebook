import { createAction } from '@reduxjs/toolkit';

export const getContactRequest = createAction('contacts/getRequest');
export const getContactSuccess = createAction('contacts/getSuccess');
export const getContactError = createAction('contacts/getError');

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const deleteContactRequest = createAction('contacts/deleteRequest');
export const deleteContactSuccess = createAction('contacts/deleteSuccess');
export const deleteContactError = createAction('contacts/deleteError');

export const editContactRequest = createAction('contacts/editRequest');
export const editContactSuccess = createAction('contacts/editSuccess');
export const editContactError = createAction('contacts/editError');

export const changeFilter = createAction('filter/change');
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const { fetchContactSuccess, addContactSuccess, deleteContactSuccess, patchContactSuccess, changeFilter, editContact } = actions;

/* ---------------ITEMS_REDUCER---------------------- */
const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior', skills: ['HTML', 'CSS']},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior', skills: ['HTML', 'SCSS']},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior', skills: ['HTML', 'CSS', 'JS', 'React']},
    {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior', skills: ['JS']},
    {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
];

const items = createReducer(initialState, {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [patchContactSuccess]: (state, { payload }) => state.map(contact => contact.id === payload.id ? payload : contact),
    [fetchContactSuccess]: (state, { payload }) => payload.length>3 ? payload : [...state, ...payload],
    // [fetchContactSuccess]: (state, { payload }) => payload,
});

/* ---------------FILTER_REDUCER---------------------- */
const filter = createReducer('', {
    [changeFilter]: ( _ , { payload }) => payload.toLowerCase(),
})

/* ---------------EDITCONTACT_REDUCER---------------------- */
const editItem = createReducer(null, {
    [editContact]: ( _ , { payload }) => payload,
})

/* ---------------LOAD_REDUCER---------------------- */
const toggleLoading = (state) => !state;
const reducerLoadingObj = Object.values(actions)
    .reduce((accObj, action) => action !== changeFilter && action !== editContact ? ({ ...accObj, [action]: toggleLoading }) : accObj, {});
const loading = createReducer(false, reducerLoadingObj);

/* ---------------ERROR_REDUCER---------------------- */
const reducerErrorObj = Object.values(actions)
    .reduce((accObj, { type }) => {
        if (type.includes('Error')) {
            const setError = (_, { payload }) => payload;
            return ({ ...accObj, [type]: setError });
        };
        if (type.includes('Request')) {
            const resetError = () => null;
            return ({ ...accObj, [type]: resetError })
        }
        return accObj;
    }, {});
const error = createReducer(null, reducerErrorObj);
/* ---------------------------------------------------- */

export default combineReducers({
  items,
  filter,
  loading,
  error,
  editItem,
});

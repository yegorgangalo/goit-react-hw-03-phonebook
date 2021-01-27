import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const { getContactSuccess, addContactSuccess, deleteContactSuccess, editContactSuccess, changeFilter } = actions;

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
    [editContactSuccess]: (state, { payload }) => state.map(contact => contact.id === payload.id ? payload : contact),
    [getContactSuccess]: (state, { payload }) => payload.length>3 ? payload : [...state, ...payload],
    // [getContactSuccess]: (state, { payload }) => payload,
});

const filter = createReducer('', {
    [changeFilter]: ( _ , { payload }) => payload.toLowerCase(),
})

const toggleLoading = (state) => !state;
const reducerLoadingObj = Object.values(actions)
    .reduce((accObj, action) => action !== changeFilter ? ({ ...accObj, [action]: toggleLoading }) : accObj, {});
const loading = createReducer(false, reducerLoadingObj);

const setError = (_, { payload }) => payload;
const reducerErrorObj = Object.values(actions)
    .reduce((accObj, {type}) => type.includes('Error') ? ({ ...accObj, [type]: setError }) : accObj, {});
const error = createReducer(null, reducerErrorObj);

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

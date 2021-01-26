import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

// const { addContact: ADD, deleteContact: DELETE, changeFilter: FILTER_CHANGE, getFromLocalStorage: GET} = actions;
const { addContact: ADD, deleteContact: DELETE, changeFilter: FILTER_CHANGE } = actions;

const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior', skills: ['HTML', 'CSS']},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior', skills: ['HTML', 'SCSS']},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior', skills: ['HTML', 'CSS', 'JS', 'React']},
    {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior', skills: ['JS']},
    {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
];

const items = createReducer(initialState, {
    [ADD]: (state, { payload }) => [...state, payload],
    [DELETE]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    // [GET]: (state, { payload }) => payload,
});

const filter = createReducer('', {
    [FILTER_CHANGE]: (state, { payload }) => payload.toLowerCase(),
})

export default combineReducers({
  items,
  filter,
});

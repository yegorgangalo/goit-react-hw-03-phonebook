// import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import * as operations from './contacts-operations';
const { changeFilter, editContact } = actions;
const { fetchContacts, addContact, deleteContact, patchContact } = operations;

/* ---------------initialState_for_ITEMS_REDUCER---------------------- */
const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior', skills: ['HTML', 'CSS']},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior', skills: ['HTML', 'SCSS']},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior', skills: ['HTML', 'CSS', 'JS', 'React']},
    {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior', skills: ['JS']},
    {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
];

/* ------------------------------------------------- */
const contactsSlice = createSlice({
  name: 'contacts',
    initialState: { items: initialState, filter: '', loading: false, error: null, editItem: null },
    reducers: {

    },
  extraReducers: {
    [addContact.fulfilled]: ({ items }, { payload }) => {items.push(payload)},
    [deleteContact.fulfilled]: (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
    },
    [patchContact.fulfilled]: (state, { payload }) => {
        state.items = state.items.map(item => item.id === payload.id ? payload : item);
        state.editItem = null;
    },
    [fetchContacts.fulfilled]: ({items}, { payload }) => {items.push(...payload)},
    [changeFilter]: ( state , { payload }) => {state.filter=payload.toLowerCase()},
    [editContact]: (state, { payload }) => { state.editItem = payload },
  },
});

export default contactsSlice.reducer;

/* ---------------ITEMS_REDUCER---------------------- */
// const items = createReducer(initialState, {
//     [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//     [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
//     [patchContact.fulfilled]: (state, { payload }) => state.map(contact => contact.id === payload.id ? payload : contact),
//     [fetchContacts.fulfilled]: (state, { payload }) => payload.length>3 ? payload : [...state, ...payload],
//     // [fetchContacts.fulfilled]: (state, { payload }) => payload,
// });

// /* ---------------FILTER_REDUCER---------------------- */
// const filter = createReducer('', {
//     [changeFilter]: ( _ , { payload }) => payload.toLowerCase(),
// })

// /* ---------------EDITCONTACT_REDUCER---------------------- */
// const editItem = createReducer(null, {
//     [editContact]: (_, { payload }) => payload,
//     [patchContact.fulfilled]: () => null,
// })

// /* ---------------LOAD_REDUCER---------------------- */
// const toggleLoading = (state) => !state;
// const reducerLoadingObj = Object.values(operations)
//     .reduce((accObj, operation) =>
//         ({ ...accObj, [operation.fulfilled]: toggleLoading, [operation.rejected]: toggleLoading, [operation.pending]: toggleLoading }), {});
// const loading = createReducer(false, reducerLoadingObj);

// /* ---------------ERROR_REDUCER---------------------- */
// const reducerErrorObj = Object.values(operations)
//     .reduce((accObj, operation) => {
//         // const setError = (_, { error }) => error;
//         const setError = (_, { payload }) => {
//             const { status,config,request,statusText} = payload;
//             return `Error ${status}. Can't ${config.method} by ${request.responseURL}. ${statusText}`;
//         };
//         const resetError = () => null;
//         return ({ ...accObj, [operation.rejected]: setError, [operation.pending]: resetError });
//     }, {});
// const error = createReducer(null, reducerErrorObj);
// /* ---------------------------------------------------- */

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
//   editItem,
// });

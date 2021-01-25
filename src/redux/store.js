import { configureStore } from '@reduxjs/toolkit';
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// const initialState = {
//     contacts: [
//         // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior', skills: ['HTML', 'CSS']},
//         // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
//         // {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior', skills: ['HTML', 'SCSS']},
//         // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior', skills: ['HTML', 'CSS', 'JS', 'React']},
//         // {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior', skills: ['JS']},
//         // {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
//     ],
//       filter: '',
//       showModal: false,
// };

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case 'filter/change':
//             return {
//                 ...state,
//                 filter: payload.toLowerCase(),
//             }

//         case 'contacts/add':
//             return {
//                 ...state,
//                 contacts: [...state.contacts, payload],
//             }

//         case 'contacts/delete':
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== payload),
//             }

//         case 'contacts/get':
//             return {
//                 ...state,
//                 contacts: payload,
//             }

//         case 'modal/toggle':
//             return {
//                 ...state,
//                 showModal: !state.showModal,
//             }

//         default:
//             return state;
//     }
// }
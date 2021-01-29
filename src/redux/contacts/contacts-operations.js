import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3004';

export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async () => {
        const {data} = await axios.get('/contacts');
        return data;
    }
)

export const addContact = createAsyncThunk(
    'contacts/add',
    async (contact) => {
        const {data} = await axios.post('/contacts', contact);
        return data;
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async (id) => {
        await axios.delete(`/contacts/${id}`);
        return id;
    }
)

export const patchContact = createAsyncThunk(
    'contacts/patch',
    async (contact) => {
        const {data} = await axios.patch(`/contacts/${contact.id}`, contact);
        return data;
    }
)
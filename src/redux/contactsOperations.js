import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, getContactApi, deleteContactApi } from "services/mockapi";

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkApi) => {
    await addContactApi(contact);
    return contact;
});

export const getContacts = createAsyncThunk('contacts/get/:id', async (id, thunkApi) => {
    const contacts = await getContactApi(id);
    return contacts;
});

export const deleteContact = createAsyncThunk('contacts/delete/:id', async (id, thunkApi) => {
    await deleteContactApi(id);
    return id;
});

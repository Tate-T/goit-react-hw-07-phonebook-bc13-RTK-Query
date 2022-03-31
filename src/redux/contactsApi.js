import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const сontactsApi = createApi({
    reducerPath: 'сontacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6216b55b71e7672e53694d32.mockapi.io'
    }),
    endpoints: (builder) => ({
        addContact: builder.mutation({
            query: (contact) => `/contacts/${contact}`,
        }),
        getContacts: builder.query({
            query: () => `/contacts`,
        }),
        deleteContact: builder.mutation({
            query: (id) => `/contacts/${id}`,
        }),
    }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = сontactsApi;
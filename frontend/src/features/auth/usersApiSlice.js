import { apiSlice } from '../apiSlice';
const USERS_URL = 'http://localhost:5000/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
                credentials: 'include',
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
                credentials: 'include',
            })
        })
    })
});

export const { 
    useLoginMutation, // GET would be "useLoginQuery"
    useLogoutMutation,
} = usersApiSlice;
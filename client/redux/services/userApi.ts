import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

createApi({
    reducerPath:'userAPI',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints:(builder) =>({
        getUsers: builder.query({
            query:()=>'users'
        })
    })
})
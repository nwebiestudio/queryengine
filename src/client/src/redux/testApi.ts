
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/'}),
    endpoints: (build) => ({
        getTest: build.query({
            query: () => '',
        })
    })
})

export const {useGetTestQuery} = testApi
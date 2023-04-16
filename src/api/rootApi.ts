import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_BACKEND_URL}` }),
	endpoints: () => ({}),
});

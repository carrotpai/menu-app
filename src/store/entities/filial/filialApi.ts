import { createApi } from '@reduxjs/toolkit/query/react';
import { GetAllFilialsResponseSchema, GetFilialsResponseType } from './lib/filial.zod';
import { baseQueryWithZodValidation, staggeredBaseQuery } from '@/store/baseQuery/apiBaseQueries';

export const filialApi = createApi({
  reducerPath: 'filialApi',
  baseQuery: baseQueryWithZodValidation(staggeredBaseQuery),
  tagTypes: ['filials'],
  endpoints: (build) => ({
    getAllFilials: build.query<GetFilialsResponseType, void>({
      query: () => 'filial/',
      extraOptions: { dataSchema: GetAllFilialsResponseSchema },
      providesTags: [{ type: 'filials', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllFilialsQuery } = filialApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import { GetMenuResponseType, GetMenuScheme } from './lib/menu.zod';
import { baseQueryWithZodValidation, staggeredBaseQuery } from '@/store/baseQuery/apiBaseQueries';

type getMenuQueryArgs = {
  filial_id: number;
  limit?: number;
  page?: number;
  sort_attr?: 'name' | 'filial' | 'tt' | 'status';
  value?: string;
};

function createGetMenuURLSearchParams(
  queryParams: Omit<getMenuQueryArgs & { [index: string]: any }, 'filial_id'>
) {
  const searchParams = new URLSearchParams();
  Object.keys(queryParams).forEach((param) => {
    if (queryParams[param]) {
      searchParams.append(param, queryParams[param]);
    }
  });
  return searchParams.toString();
}

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: baseQueryWithZodValidation(staggeredBaseQuery),
  tagTypes: ['menu'],
  endpoints: (build) => ({
    getMenu: build.query<GetMenuResponseType, getMenuQueryArgs>({
      query: (args) => {
        const { filial_id, ...queryParams } = args;
        const queryParamsString = createGetMenuURLSearchParams(queryParams);
        return `filial/${filial_id}/menu/${queryParamsString}`;
      },
      extraOptions: { dataSchema: GetMenuScheme },
      providesTags: [{ type: 'menu', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;

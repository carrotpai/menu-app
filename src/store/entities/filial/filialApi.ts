import { GetAllFilialsResponseSchema, GetFilialsResponseType } from './lib/filial.zod';
import { rootApi } from '@/store/store';

export const filialApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFilials: build.query<GetFilialsResponseType, void>({
      query: () => 'filial/',
      extraOptions: { dataSchema: GetAllFilialsResponseSchema },
      providesTags: [{ type: 'filials', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllFilialsQuery } = filialApi;

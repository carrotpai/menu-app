import { GetMenuResponseType, GetMenuScheme } from './lib/menu.zod';
import { rootApi } from '@/store/store';

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      searchParams.append(param, queryParams[param]);
    }
  });
  return searchParams.toString();
}

export const menuApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getMenu: build.query<GetMenuResponseType, getMenuQueryArgs>({
      query: (args) => {
        const { filial_id, ...queryParams } = args;
        const queryParamsString = createGetMenuURLSearchParams(queryParams);
        return `filial/${filial_id}/menu/?${queryParamsString}`;
      },
      extraOptions: { dataSchema: GetMenuScheme },
      providesTags: (_, error, args) => [{ type: 'menu', id: args.filial_id }],
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;

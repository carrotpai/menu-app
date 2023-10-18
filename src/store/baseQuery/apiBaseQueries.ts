import { ZodSchema } from 'zod';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/query/react';

type TypedBaseQuery = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  { dataSchema?: ZodSchema },
  FetchBaseQueryMeta
>;

export const staggeredBaseQuery = retry<TypedBaseQuery>(
  fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  {
    maxRetries: 2,
  }
);

export const baseQueryWithZodValidation: (baseQuery: TypedBaseQuery) => TypedBaseQuery =
  (baseQuery) => async (args, api, extraOptions) => {
    const returnValue = await baseQuery(args, api, extraOptions);
    const zodSchema = extraOptions?.dataSchema;
    const { data } = returnValue;

    if (data && zodSchema) {
      // eslint-disable-next-line no-useless-catch
      try {
        zodSchema.parse(data);
      } catch (error) {
        //выйти из ретрая если произошла ошибка парсинга
        retry.fail(error);
      }
    }

    return returnValue;
  };

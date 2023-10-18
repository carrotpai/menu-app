import { z } from 'zod';

export const GetAllFilialsResponseSchema = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .array();

export type GetFilialsResponseType = z.infer<typeof GetAllFilialsResponseSchema>;

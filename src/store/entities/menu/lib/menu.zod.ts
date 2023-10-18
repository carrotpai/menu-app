import { z } from 'zod';

export const GetMenuScheme = z.object({
  data: z
    .object({
      id: z.number(),
      name: z.string(),
      filial: z.object({
        id: z.number(),
        name: z.string(),
      }),
      tt: z.object({
        id: z.number(),
        name: z.string(),
      }),
    })
    .array(),
  max_pages: z.number(),
});

export type GetMenuResponseType = z.infer<typeof GetMenuScheme>;

import { z } from 'zod';

export const GetMenuScheme = z
  .object({
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
        active: z.boolean(),
        export: z.string().array(),
      })
      .array(),
    max_pages: z.number(),
  })
  .or(z.object({ message: z.string() }));

export type GetMenuResponseType = z.infer<typeof GetMenuScheme>;

import { z } from 'zod';

export const Submission = z.object({
  id: z.string(),
  name: z.string().nonempty({
    message: 'Der Name muss angegeben werden.',
  }),
  what: z.string().nonempty({
    message: 'Ihr müsstet schon sagen, was ihr mitbringen wollt.',
  }),
  persons: z.string().optional(),
});

export type Submission = z.infer<typeof Submission>;

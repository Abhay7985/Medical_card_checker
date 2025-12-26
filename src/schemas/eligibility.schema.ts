import { z } from 'zod';

export const eligibilitySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
  condition: z.string().min(5),
  state: z.string()
});

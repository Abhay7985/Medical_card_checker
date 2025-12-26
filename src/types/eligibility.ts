import { z } from 'zod';
import { eligibilitySchema } from '@/schemas/eligibility.schema';

export type EligibilityPayload = z.infer<typeof eligibilitySchema>;

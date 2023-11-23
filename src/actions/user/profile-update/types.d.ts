import { z } from 'zod';

import { ActionState } from '@/lib/createMutation';

import { Schema } from './schema';
import { User } from '@prisma/client';

export type InputType = z.infer<typeof Schema>;
export type ReturnType = User;

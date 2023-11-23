import { z } from 'zod';

import { ActionState } from '@/lib/createMutation';

import { Schema } from './schema';

export type InputType = z.infer<typeof Schema>;
export type ReturnType = {
    test: number;
    data: Any;
};

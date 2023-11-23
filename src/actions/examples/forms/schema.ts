import { z } from 'zod';

export const Schema = z.object({
    username: z.string().min(3, {
        message: 'Username must be at least 3 characters.'
    })
});

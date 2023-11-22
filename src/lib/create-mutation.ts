import { z } from 'zod';

export type FieldErrors<TInput> = {
    [K in keyof TInput]?: string[];
};

export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>;
    error?: string | null;
    data?: TOutput;
};

/**
 * Wrapper for mutations that handles parsing of input with zod and executes
 * action with validated data.
 * @param action Action to execute.
 * @param schema Validation schema.
 * @returns
 */
export const createMutation = <TInput, TOutput>(
    action: (validatedData: TInput) => Promise<TOutput>,
    schema: z.Schema<TInput>
) => {
    return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
        const validationResult = schema.safeParse(data);
        if (!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten()
                    .fieldErrors as FieldErrors<TInput>
            };
        }

        return {
            data: await action(validationResult.data)
        };
    };
};

import { useState, useCallback } from 'react';

import { ActionState, FieldErrors } from '@/lib/create-mutation';
import { UseFormReturn } from 'react-hook-form';

type Action<TInput, TOutput> = (
    data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface useMutationOptions<TInput, TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: Error) => void;
    onFieldError?: (error: FieldErrors<TInput>) => void;
    onComplete?: () => void;
    resetOnSuccess?: boolean;
}

/**
 * Hook to execute a mutation.
 * @param action
 * @param options
 * @param form pass `useForm()` hook from `react-hook-form` to display server-side fieldErrors below fields and reset form onComplete
 * @returns
 */
export const useMutation = <TInput, TOutput>(
    action: Action<TInput, TOutput>,
    options: useMutationOptions<TInput, TOutput> = {},
    form?: UseFormReturn<any>
) => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setData] = useState<TOutput | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<
        FieldErrors<TInput> | undefined
    >(undefined);

    const execute = useCallback(
        async (input: TInput) => {
            setIsLoading(true);

            action(input)
                .then((result) => {
                    if (!result) {
                        return;
                    }

                    // return data
                    if (result.data) {
                        setData(result.data);
                        options.onSuccess?.(result.data);

                        if (options.resetOnSuccess) {
                            if (form) {
                                form.reset();
                            } else {
                                throw new Error(
                                    '`form` arg must be provided to reset form'
                                );
                            }
                        }
                    }

                    // validation error
                    if (result.fieldErrors) {
                        setFieldErrors(result.fieldErrors);
                        options.onFieldError?.(result.fieldErrors);

                        // display field errors below form fields similiar to client-side validation
                        if (form) {
                            Object.entries(result.fieldErrors).map((err) => {
                                const [name, message] = err as [
                                    string,
                                    string[]
                                ];

                                form.setError(name, {
                                    message: message[0],
                                    type: 'server'
                                });
                            });
                        }
                    }
                })
                .catch((err: Error) => {
                    // server error
                    setError(err.message);
                    options.onError?.(err);
                })
                .finally(() => {
                    setIsLoading(false);
                    options.onComplete?.();
                });
        },
        [action, options, form]
    );

    return {
        execute,
        fieldErrors,
        error,
        data,
        isLoading
    };
};

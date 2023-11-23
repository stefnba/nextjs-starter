'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';

import { FormSubmit, FormInput } from '@/components/form';

import { useMutation } from '@/hooks/mutation';
import {
    mutation as profileUpdateAction,
    type InputType as TProfileUpdateSchema,
    Schema as ProfileUpdateSchema
} from '@/actions/examples/forms';
import toast from 'react-hot-toast';

export const TestForm = () => {
    const form = useForm<TProfileUpdateSchema>({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
            username: ''
        }
    });

    const { execute } = useMutation(
        profileUpdateAction,
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success('Update successful');
            },
            onError: (error) => {
                toast.error('Update failed: ' + error.message);
            },
            onFieldError: (error) => {},
            resetOnSuccess: true
        },
        form
    );

    const onSubmit = async (data: TProfileUpdateSchema) => {
        await execute(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormInput form={form} name="username" label="Username" />
                <FormSubmit form={form} />
            </form>
        </Form>
    );
};

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
} from '@/actions/user/profile-update';

export const TestForm = () => {
    const form = useForm<TProfileUpdateSchema>({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
            username: '',
            email: ''
        }
    });

    const { execute } = useMutation(
        profileUpdateAction,
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log({ error });
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
                <FormInput form={form} name="email" label="Email" />
                <FormSubmit title="Test" form={form} />
            </form>
        </Form>
    );
};

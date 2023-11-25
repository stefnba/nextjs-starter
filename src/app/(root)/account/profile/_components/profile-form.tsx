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
import toast from 'react-hot-toast';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface ProfileUpdateFormProps {
    data: User | null | undefined;
}

export const ProfileUpdateForm = ({ data }: ProfileUpdateFormProps) => {
    const form = useForm<TProfileUpdateSchema>({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
            name: data?.name || ''
        }
    });
    const router = useRouter();

    const { execute } = useMutation(
        profileUpdateAction,
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success('Profile updated');
                router.refresh();
            },
            onError: (error) => {
                toast.error('Update failed: ' + error.message);
            },
            onFieldError: (error) => {},
            resetOnSuccess: false
        },
        form
    );

    const onSubmit = async (data: TProfileUpdateSchema) => {
        await execute(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-96 space-y-8"
            >
                <FormInput form={form} name="name" label="Name" />
                <FormSubmit title="Update Profile" form={form} />
            </form>
        </Form>
    );
};

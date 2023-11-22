'use client';
import { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LuLoader2 } from 'react-icons/lu';
import { toast } from 'react-hot-toast';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import axios from 'axios';
import Image from 'next/image';
import { User } from '@prisma/client';

const formSchema = z.object({
    // email: z.coerce.string().email().min(1, 'Email is required'),
    // password: z.string().min(1, 'Password must not be empty')
    name: z.string()
});

interface ProfileFormProps {
    data: User | null;
}

const ProfileForm = ({ data }: ProfileFormProps) => {
    const [isSubmitting, setSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data?.name || ''
            // email: data?.email || ''
        }
    });

    const handleUpdate = (values: z.infer<typeof formSchema>) => {
        setSubmitting(true);
        axios
            .put('/api/user', values)
            .then((res) => {
                toast.success('Profile updated');
            })
            .catch((err) => {
                console.log(err);
                toast.error('There was an error');
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="flex">
            <div className="w-56">
                <Image
                    className="rounded-full"
                    src={data?.image || ''}
                    alt="Profile Picture"
                    width={120}
                    height={120}
                />
            </div>
            <div className="flex">
                <Form {...form}>
                    <form
                        className="flex w-[320px] flex-col"
                        onSubmit={form.handleSubmit(handleUpdate)}
                    >
                        <div className="flex w-full flex-col space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                        </div>

                        <Button
                            type="submit"
                            className="mt-8"
                            variant="default"
                        >
                            {isSubmitting && (
                                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Update Profile
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ProfileForm;

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {
    AiFillGithub,
    AiFillGoogleCircle,
    AiFillLinkedin
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const formSchema = z.object({
    // email: z.coerce.string().email().min(1, 'Email is required'),
    // password: z.string().min(1, 'Password must not be empty')
    email: z.string(),
    password: z.string()
});

const RegisterForm = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    });

    const handleLogin = (values: z.infer<typeof formSchema>) => {
        setSubmitting(true);

        axios
            .post('/api/register', values)
            .then((res) => {
                setSubmitting(false);

                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="mt-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    //
                >
                    <div className="mt-6 space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input
                                            type="email"
                                            {...field}
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {isFailed && (
                        <div className="mt-4 text-sm text-red-700">
                            Login failed
                        </div>
                    )}
                    <Button
                        type="submit"
                        className="mt-2 w-full"
                        size="lg"
                        // variant="outline"
                    >
                        Register with Email
                    </Button>
                </form>
            </Form>
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-100 px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                onClick={() =>
                    signIn('github', { redirect: true, callbackUrl: '/' })
                }
                className="w-full justify-start pl-28"
                variant="outline"
                // size="lg"
            >
                {/* <AiFillGithub className="h-4 w-4" /> */}
                <AiFillGithub className="mr-2 h-6 w-6" /> Github
            </Button>
            <Button
                onClick={() => signIn('google')}
                className="mt-2 w-full justify-start pl-28"
                variant="outline"
                // size="lg"
            >
                {/* <AiFillGithub className="h-4 w-4" /> */}
                <FcGoogle className="mr-2 h-6 w-6" />
                Google
            </Button>
            <Button
                onClick={() => signIn('google')}
                className="mt-2 w-full justify-start pl-28"
                variant="outline"
                // size="lg"
            >
                {/* <AiFillGithub className="h-4 w-4" /> */}
                <AiFillLinkedin className="mr-2 h-6 w-6" />
                LinkedIn
            </Button>
        </div>
    );
};

export default RegisterForm;

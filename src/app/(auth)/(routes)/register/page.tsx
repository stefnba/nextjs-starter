import { getSession } from '@/actions/auth/get-session';
import RegisterForm from './_components/register-form';

import Link from 'next/link';
import { redirect } from 'next/navigation';

const Register = async () => {
    const session = await getSession();

    if (session) {
        redirect('/');
    }

    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome!
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to register a new account.
                </p>
            </div>
            <RegisterForm />

            <p className="mt-8 px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{' '}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
            <p className="mt-8 px-8 text-center text-sm text-muted-foreground">
                If you already have an account, you can login{' '}
                <Link
                    href="/login"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    here
                </Link>
                .
            </p>
        </>
    );
};

export default Register;

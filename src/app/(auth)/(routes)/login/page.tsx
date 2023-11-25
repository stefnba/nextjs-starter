import { getSession } from '@/actions/auth/get-session';
import Link from 'next/link';
import LoginForm from './_components/login-form';
import { redirect } from 'next/navigation';

const Login = async () => {
    const session = await getSession();

    if (session) {
        redirect('/');
    }

    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome back!
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to log in.
                </p>
            </div>

            <LoginForm />

            <p className="mt-8 px-8 text-center text-sm text-muted-foreground">
                If you don&apos;t have an account yet, you can register{' '}
                <Link
                    href="/register"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    here
                </Link>
                .
            </p>
        </>
    );
};

export default Login;

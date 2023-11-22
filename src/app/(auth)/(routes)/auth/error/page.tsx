'use client';

import { useSearchParams } from 'next/navigation';

const AuthError = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    let err = {
        heading: 'There was an error!',
        message: ''
    };

    if (error === 'Verification') {
        err = {
            heading: 'Unable to sign in!',
            message:
                'The sign in link is no longer valid. It may have been used already or it may have expired.'
        };
    }

    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {err.heading}
                </h1>
                <p className="mt-8 text-muted-foreground">{err.message}</p>
            </div>
        </>
    );
};

export default AuthError;

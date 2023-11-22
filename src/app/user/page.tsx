import { getSession } from '@/actions/auth/getSession';
import prisma from '@/db/client';

import { UserUpdateForm } from './_components/profile-form';

const User = async () => {
    const session = await getSession();

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email!
        }
    });
    return (
        <>
            <div className="pb-10 text-3xl">User</div>

            <UserUpdateForm />
        </>
    );
};

export default User;

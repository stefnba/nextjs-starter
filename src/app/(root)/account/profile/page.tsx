import { PageHeader } from '@/components/page/header';
import { ProfileUpdateForm } from './_components/profile-form';
import prisma from '@/db/client';
import { getSession } from '@/actions/auth/get-session';

const ProfilePage = async () => {
    const auth = await getSession();

    if (!auth?.user?.email) {
        return;
    }

    const user = await prisma.user.findUnique({
        where: {
            email: auth.user.email
        }
    });

    return (
        <>
            <PageHeader
                title="Profile"
                breadcrumbs={[
                    {
                        href: '/account',
                        page: 'Account'
                    },
                    {
                        href: 'profile',
                        page: 'Profile'
                    }
                ]}
                subTitle="Provide personal details and how we can reach you"
            />
            <ProfileUpdateForm data={user} />
        </>
    );
};

export default ProfilePage;

import { PageHeader } from '@/components/page/header';
import { ProfileUpdateForm } from './_components/profile-form';

const ProfilePage = async () => {
    const user = await prisma?.user.findUnique({
        where: {
            email: 'stefanjakob.bauer@gmail.com'
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
                subTitle="Manage your account settings"
            />
            <ProfileUpdateForm data={user} />
        </>
    );
};

export default ProfilePage;

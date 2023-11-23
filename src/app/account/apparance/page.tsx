import { PageHeader } from '@/components/page/header';

const ApparancePage = () => {
    return (
        <>
            <PageHeader
                title="Apparance"
                breadcrumbs={[
                    {
                        href: '/account',
                        page: 'Account'
                    },
                    {
                        href: 'profile',
                        page: 'Apparance'
                    }
                ]}
                subTitle="Manage your account settings"
            />
        </>
    );
};

export default ApparancePage;

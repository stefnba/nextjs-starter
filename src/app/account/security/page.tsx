import { PageHeader } from '@/components/page/header';

const SecurityPage = () => {
    return (
        <>
            <PageHeader
                title="Security"
                breadcrumbs={[
                    {
                        href: '/account',
                        page: 'Account'
                    },
                    {
                        href: '/account/security',
                        page: 'Security'
                    }
                ]}
                subTitle="Manage your account settings"
            />
        </>
    );
};

export default SecurityPage;

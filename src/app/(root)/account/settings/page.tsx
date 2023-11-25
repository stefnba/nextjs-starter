import { PageHeader } from '@/components/page/header';

const SettingsPage = () => {
    return (
        <>
            <PageHeader
                title="Settings"
                breadcrumbs={[
                    {
                        href: '/account',
                        page: 'Account'
                    },
                    {
                        href: 'settings',
                        page: 'Settings'
                    }
                ]}
                subTitle="Set your default language and timezone"
            />
        </>
    );
};

export default SettingsPage;

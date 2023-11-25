import { getSession } from '@/actions/auth/get-session';
import prisma from '@/db/client';

import { ProfileUpdateForm } from './profile/_components/profile-form';
import { Separator } from '@/components/ui/separator';
import { LucideIcon, Lock, User2, Bell, Sun, Settings } from 'lucide-react';

import {
    Card,
    NavCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardIcon
} from '@/components/ui/card';
import { PageHeader } from '@/components/page/header';

type TNavItem = {
    title: string;
    href: string;
    description?: string;
    avatar?: LucideIcon;
};

const navItems: TNavItem[] = [
    {
        title: 'Profile',
        href: 'account/profile',
        description: 'Provide personal details and how we can reach you',
        avatar: User2
    },
    {
        title: 'Security',
        href: 'account/security',
        description: 'Secure your account and view active sessions',
        avatar: Lock
    },
    {
        title: 'Notification',
        href: 'account/notification',
        description:
            'Choose notification preferences and how you want to be contacted',
        avatar: Bell
    },
    {
        title: 'Apparence',
        href: 'account/apparance',
        description: 'Adjust your theme',
        avatar: Sun
    },
    {
        title: 'Settings',
        href: 'account/settings',
        description: 'Set your default language and timezone',
        avatar: Settings
    }
];

const SettingsPage = async () => {
    const session = await getSession();

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email!
        }
    });
    return (
        // <ProfileUpdateForm data={user} />
        <>
            <PageHeader
                title="Account"
                subTitle="Manage your account & settings"
            />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {navItems.map(({ description, href, title, avatar }) => (
                    <NavCard key={href} href={href} className="">
                        <CardHeader>
                            {avatar && <CardIcon icon={avatar} />}
                            <CardTitle>{title}</CardTitle>
                            <CardDescription className="h-[40px]">
                                {description}
                            </CardDescription>
                        </CardHeader>
                    </NavCard>
                ))}
            </div>
        </>

        // <div className="space-y-6">
        //     <div>
        //         <h3 className="text-lg font-medium">Profile</h3>
        //         <p className="text-sm text-muted-foreground">
        //             This is how others will see you on the site.
        //         </p>
        //     </div>
        //     <Separator />
        //     <ProfileUpdateForm data={user} />
        // </div>
    );
};

export default SettingsPage;

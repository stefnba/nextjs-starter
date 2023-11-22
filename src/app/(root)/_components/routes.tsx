'use client';

import { LuLayoutDashboard, LuUser, LuSettings } from 'react-icons/lu';

const routes = [
    {
        icon: LuLayoutDashboard,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: LuUser,
        label: 'User',
        href: '/user'
    },
    {
        icon: LuSettings,
        label: 'Settings',
        href: '/user/settings'
    }
];

export default routes;

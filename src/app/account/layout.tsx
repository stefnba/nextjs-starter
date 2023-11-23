import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import Navbar from '../(root)/_components/navbar/Navbar';
import Sidebar from '../(root)/_components/sidebar/Sidebar';
import { SidebarNav } from './profile/_components/nav';
import { PageHeader } from '@/components/page/header';
// import { SidebarNav } from '@/app/examples/forms/components/sidebar-nav';

interface SettingsLayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <div className="h-full">
            <Navbar />
            <Sidebar />
            <main className="hidden space-y-6 p-10 pb-16 pt-[104px] md:ml-56 md:block">
                {children}
            </main>
        </div>
    );
}

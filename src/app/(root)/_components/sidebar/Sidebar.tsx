'use client';

import { cn } from '@/lib/utils';
import SidebarMenu from './Menu';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/hooks/sidebar';

const Sidebar = () => {
    const { isOpen } = useSidebar();
    return (
        <div
            className={cn(
                'inset-y-0 z-50 hidden h-full items-center transition md:block'
                // isOpen && 'md:hidden'
            )}
        >
            <SidebarMenu />
        </div>
    );
};

export default Sidebar;

'use client';

import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
    icon: IconType;
    label: string;
    href: string;
}

export const SidebarNavItem = ({
    icon: Icon,
    label,
    href
}: SidebarNavItemProps) => {
    const pathname = usePathname();

    const isActive =
        (pathname === '/' && href === '/') ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={cn(
                ' mb-2 flex rounded-md pl-4 transition hover:bg-slate-300 hover:text-slate-600',
                isActive &&
                    'bg-red-200/20 text-red-500 hover:bg-red-200/20 hover:text-red-700',
                true && ''
            )}
        >
            <div className="flex items-center py-3 text-sm">
                {Icon && <Icon size={20} className="" />}
                <div
                    className={cn(
                        'font-[500]transition-all ml-3',
                        false && 'hidden'
                    )}
                >
                    {label}
                </div>
            </div>
        </Link>
    );
};

export default SidebarNavItem;

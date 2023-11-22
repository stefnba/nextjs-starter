'use client';
import routes from '../routes';
import SidebarNavItem from './NavItem';

const SidebarMenu = () => {
    return (
        <div className="mt-10 flex h-full w-48 flex-col overflow-y-auto px-2">
            {routes.map((route) => (
                <SidebarNavItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

export default SidebarMenu;

import { cn } from '@/lib/utils';
import SidebarMenu from './Menu';

const Sidebar = () => {
    return (
        <div
            className={cn(
                'fixed inset-y-0 z-50 mt-[80px] hidden h-full transition md:flex'
            )}
        >
            <SidebarMenu />
        </div>
    );
};

export default Sidebar;

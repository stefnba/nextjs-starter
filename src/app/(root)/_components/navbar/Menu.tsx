import { LuBell, LuUser } from 'react-icons/lu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuLinkItem
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logout from './Logout';
import { getSession } from '@/actions/auth/get-session';

const NavbarMenu = async () => {
    const session = await getSession();

    return (
        <div className="ml-auto flex items-center gap-x-5 pr-4">
            <LuBell className="cursor-pointer hover:text-slate-600" size={20} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="b-0 relative h-10 w-10 rounded-full focus:outline-none">
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                                src={session?.user?.image || ''}
                                alt="@shadcn"
                            />
                            <AvatarFallback>SB</AvatarFallback>
                        </Avatar>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-lg font-medium leading-none">
                                {session?.user?.name}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {session?.user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuLinkItem href="/account">
                            Account Settings
                        </DropdownMenuLinkItem>
                        <DropdownMenuLinkItem href="/account/profile">
                            Profile
                        </DropdownMenuLinkItem>
                        <DropdownMenuLinkItem href="/account/security">
                            Security
                        </DropdownMenuLinkItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default NavbarMenu;

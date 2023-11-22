'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';

const Logout = () => {
    return (
        <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => signOut({ redirect: true })}
        >
            Logout
        </DropdownMenuItem>
    );
};

export default Logout;

import Navbar from './_components/navbar/Navbar';
import Sidebar from './_components/sidebar/Sidebar';

interface AccountLayoutProps {
    children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
    return (
        <div className="flex h-full pt-[104px]">
            <Navbar />
            <Sidebar />
            <main className="w-full px-6">{children}</main>
        </div>
    );
}

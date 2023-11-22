import Navbar from './_components/navbar/Navbar';
import Sidebar from './_components/sidebar/Sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <Sidebar />
            <main className="h-full p-6 pt-[104px] md:ml-56">{children}</main>
        </div>
    );
};

export default Layout;

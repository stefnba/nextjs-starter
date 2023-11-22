import NavbarMenu from './Menu';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
    return (
        <div className="fixed inset-y-0 z-50 flex h-[75px] w-full items-center border-b bg-white px-6 shadow-sm">
            <Logo />
            {/* <Search /> */}
            <NavbarMenu />
        </div>
    );
};

export default Navbar;

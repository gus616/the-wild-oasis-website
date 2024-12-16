import SideNavigation from "../_components/SideNavigation";
const AccountLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <main className="max-w-7xl mx-auto">{children}</main>
        </div>
    );
};

export default AccountLayout;
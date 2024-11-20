import { Navbar } from "./_components/navbar";

interface LayoutProsp {
    children: React.ReactNode;
}

const Layout = ({children} :LayoutProsp) => {
    return(
        <div className="flex flex-col p-10 xl:px-0 container">
            <Navbar />
            {children}
        </div>
    );
};
export default Layout;
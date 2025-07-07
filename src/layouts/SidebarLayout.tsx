import Sidebar from '../components/Sidebar'


type propos = {
    children : React.ReactNode;
};

const SidebarLayout = ({ children} : propos) => {
    return (
        <div className="flex">
            <Sidebar/>
            <main className="flex-1 p-4 bg-gray-50">{ children }</main>
        </div>
    );
};

export default SidebarLayout;
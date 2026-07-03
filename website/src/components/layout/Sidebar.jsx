import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard",
        filled: true,
    },
    {
        name: "Tabs",
        path: "/dashboard/tabs",
        icon: "tab",
    },
    {
        name: "Bookmarks",
        path: "/dashboard/bookmarks",
        icon: "bookmark",
    },
    {
        name: "Collections",
        path: "/dashboard/collections",
        icon: "folder_special",
    },
    {
        name: "Knowledge Base",
        path: "/dashboard/knowledge-base",
        icon: "menu_book",
    },
    {
        name: "AI Suggestions",
        path: "/dashboard/ai-suggestions",
        icon: "auto_awesome",
    },
    {
        name: "Duplicate Finder",
        path: "/dashboard/duplicate-finder",
        icon: "content_copy",
    },
    {
        name: "Broken Links",
        path: "/dashboard/broken-links",
        icon: "link_off",
    },
    {
        name: "Inactive Tabs",
        path: "/dashboard/inactive-tabs",
        icon: "timer_off",
    },
];

const bottomNavItems = [
    {
        name: "Notifications",
        path: "/dashboard/notifications",
        icon: "notifications",
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
        icon: "settings",
    },
];

const linksClasses = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-1.5 transition-all duration-200
${isActive
        ? 'bg-[#e3e2e6] text-[#005bbf] font-semibold'
        : 'text-on-surface-variant hover:bg-[#e3e2e6]'
    }`;

const Sidebar = () => {

    return (
        <nav className="w-60 h-screen fixed left-0 top-0 bg-[#f3f4f5] border-r border-[#c1c6d6] flex-col pt-0.5 pb-8 px-4 gap-2 flex md:flex z-40">
            <div className="mb-8 px-2 py-2 flex items-center">
                <img 
                    src={logo} 
                    alt="logo" 
                    className='w-15 h-15' />
                <h1 className="font-semibold text-xl text-[#191c1d]">TabMarko</h1>
            </div>

            <div className='flex flex-col gap-2'>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={linksClasses}
                        end={item.path === "/dashboard"}
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontVariationSettings: `"FILL" 1 ${isActive ? 1 : 0}`,
                                    }}
                                >
                                    {item.icon}
                                </span>

                                {item.name}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
            <div className="mt-auto flex flex-col gap-2">
                {bottomNavItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={linksClasses}
                    >
                        <span className="material-symbols-outlined">
                            {item.icon}
                        </span>

                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Sidebar

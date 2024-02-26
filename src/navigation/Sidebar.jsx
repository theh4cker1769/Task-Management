import React from 'react'
import SidebarDropdown from './SidebarDropdown';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineMonitor } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Static Images
    const logo = `${process.env.PUBLIC_URL}/assets/images/logo-black.png`;


    const dropdowns = [
        {
            title: 'My Task List',
            items: [
                { text: 'My Pending Task', link: '/none' },
                { text: 'Team Pending', link: '/none' },
                { text: 'My Dashboard', link: '/my-dashboard' },
            ],
        },
        {
            title: 'Dropdown 2',
            items: [
                { text: 'Option A', link: '/optionA' },
                { text: 'Option B', link: '/optionB' },
                { text: 'Option C', link: '/optionC' },
            ],
        },
    ];

    return (
        <nav className='side-bar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className="nav-section">
                <h4>Dashboard</h4>
                {dropdowns.map((dropdown, index) => (
                    <SidebarDropdown key={index} title={dropdown.title} items={dropdown.items} />
                ))}
                <div className="bottom-nav-main">
                    <div className="nav-main">
                        <Link to="/none">
                            <button className="nav-dropdown-toggle">
                                <IoIosArrowForward className='arrow' /> <MdOutlineMonitor className='monitor' /> Help
                            </button>
                        </Link>
                    </div>
                    <div className="nav-main">
                        <Link to="/none">
                            <button className="nav-dropdown-toggle">
                                <IoIosArrowForward className='arrow' /> <MdOutlineMonitor className='monitor' /> Logout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const SidebarDropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="nav-main">
            <button className="nav-dropdown-toggle" onClick={toggleDropdown}>
                {isOpen ? <IoIosArrowDown className='arrow' /> : <IoIosArrowForward className='arrow' /> } <MdOutlineMonitor className='monitor' />{title}
            </button>
            {isOpen && (
                <div className={`nav-dropdown-menu ${isOpen ? 'fade-in' : ''}`}>
                    {items.map((item, index) => (
                        <NavLink key={index} to={item.link} className="nav-dropdown-item">
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SidebarDropdown
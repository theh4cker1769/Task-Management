import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { GoTriangleDown } from "react-icons/go";

const Header = () => {

    // images
    const user = `${process.env.PUBLIC_URL}/assets/images/user.png`

    return (
        <header className='header'>
            <h2 className='title'>Dashboard</h2>
            <div className="header-right d-flex gap-2 align-items-center">
                <form className="search-container" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                    <FiSearch className='search-icon' />
                </form>
                <button className='assign-task'> <FaCirclePlus className='icon' /> Assign Task</button>
                <button className='assign-task team'> <AiOutlineUserAdd className='icon' /> Team</button>
                <div className="notifications">
                    <HiOutlineBell className='icon' />
                    <span className="num">12</span>
                </div>
                <div className="user-section">
                    <img src={user} alt='user' />
                    <div className="user-info">
                        <span className='user-name'>John Doe</span>
                        <span className='user-role'>Admin</span>
                    </div>
                    <GoTriangleDown className='icon'/>
                </div>
            </div>
        </header>
    )
}

export default Header
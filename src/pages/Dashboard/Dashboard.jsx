import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from "react-icons/io5";

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState('myTask')

    return (
        <section className='dashboard'>
            <div className="filter-sec">
                <div className="filter-tabs">
                    <button className={`${activeTab == 'myTask' ? 'active fade-in' : ''}`} onClick={() => setActiveTab('myTask')}>My Task {(activeTab == 'myTask') && <span>198</span>}</button>
                    <button className={`${activeTab == 'assignedTask' ? 'active fade-in' : ''}`} onClick={() => setActiveTab('assignedTask')}>Task Assigned by me {(activeTab == 'assignedTask') && <span>198</span>}</button>
                </div>
                <div className="filter-search-dropdowns">
                    <form className="search-container" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search task..." aria-label="Search" />
                        <FiSearch className='search-icon' />
                    </form>
                    <div className="dropdowns">
                        <div className="dropdown">
                            <select className='form-select'>
                                <option value="" selected>Assigned By</option>
                                <option value="">Dummy Option 1</option>
                                <option value="">Dummy Option 2</option>
                                <option value="">Dummy Option 3</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <select className='form-select'>
                                <option value="" selected>Status</option>
                                <option value="">Open</option>
                                <option value="">Close</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <select className='form-select'>
                                <option value="" selected>Data Range</option>
                                <option value="">High</option>
                                <option value="">Medium</option>
                                <option value="">Low</option>
                            </select>
                        </div>
                    </div>
                    <button className='clear'>Clear All <IoClose /></button>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
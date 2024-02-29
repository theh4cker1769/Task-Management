import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { render } from '@testing-library/react';

const DataTable = () => {

    const image = `${process.env.PUBLIC_URL}/assets/images/user.png`

    const columns = [
        {
            field: 'taskType', headerName: 'Task Type', width: 100,
            renderCell: (params) => {
                const classColor = params.value.classColor
                const value = params.value.value
                return (
                    <span className={`taskType ${classColor}`}>{value}</span>
                )
            },
        },
        { field: 'taskDescription', headerName: 'Task Description', width: 220 },
        { field: 'startDate', headerName: 'Start Date', width: 130 },
        { field: 'endDate', headerName: 'End Date', width: 130 },
        {
            field: 'assignedBy',
            headerName: 'Assigned By',
            width: 150,
            renderCell: (params) => (
                <img src={params.value} alt="Avatar" style={{ width: '40px', height: '40px' }} />
            ),
        },
        { field: 'completedDate', headerName: 'Completed Date', width: 150 },
        {
            field: 'taskStatus', headerName: 'Task Status', width: 150,
            renderCell: (params) => {
                const progress = params.value.progress
                const classColor = params.value.class
                return (
                    <div className="progress-bar">
                        <div className={`progress ${classColor}`} style={{ width: `${progress}%` }}></div>
                    </div>
                )
            },
        },
        {
            field: 'priorty', headerName: 'Priorty', width: 100,
            renderCell: (params) => (
                <span className={`priorty ${params.value}`}>{params.value}</span>
            ),
        },
    ];

    const rows = [
        { id: 1, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'low' }, priorty: 'Medium' },
        { id: 2, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'low' }, priorty: 'Medium' },
        { id: 3, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'medium' }, priorty: 'Medium' },
        { id: 4, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'low' }, priorty: 'Medium' },
        { id: 5, taskType: { value: 'KRA', classColor: 'medium' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'low' }, priorty: 'Medium' },
        { id: 6, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'high' }, priorty: 'Medium' },
        { id: 7, taskType: { value: 'KRA', classColor: 'low' }, taskDescription: 'Prepare Pallets Manufacturing', startDate: '10/01/24', endDate: '14/01/24', assignedBy: image, completedDate: '15/01/24', taskStatus: { progress: '40', class: 'low' }, priorty: 'Medium' },
    ];

    return (
        <section className='data-table'>
            <h2 className='title'>My Task List</h2>
            <div style={{ width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </section>
    )
}

export default DataTable
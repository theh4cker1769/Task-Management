import React, { useState } from 'react'
import FIltersec from './FIltersec';
import RecordsSec from './RecordsSec';
import DataTable from './DataTable';

const Dashboard = () => {

    

    return (
        <section className='dashboard'>
            <FIltersec/>
            <RecordsSec/>
            <DataTable/>
        </section>
    )
}

export default Dashboard
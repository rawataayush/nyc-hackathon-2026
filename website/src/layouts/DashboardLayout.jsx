import Sidebar  from '../components/layout/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/layout/Topbar';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='ml-60 flex-1'>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout;
import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import FInanceChart from '@/components/FInanceChart';
import UserCard from '@/components/UserCard';
import React from 'react'

const Adminpage = () => {
    return (
        <div className='p-4 flex flex-col md:flex-row gap-4'>
            {/* LEFT */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* USER CARD */}
                <div className='flex justify-between flex-wrap gap-4'>
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>

                {/* MIDDLE CHARTS */}
                <div className='flex flex-col lg:flex-row gap-4'>

                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart />
                    </div>

                    <div className='w-full lg:w-2/3 h-[450px]'>
                        <AttendanceChart />
                    </div>

                </div>

                {/* BOTTOM CHARTS */}
                <div className='w-full h-[500px]'>
                    <FInanceChart/>
                </div>

            </div>
            {/* RIGHT */}
            <div className='w-full lg:w-1/3'>r</div>
        </div>
    )
}


export default Adminpage;
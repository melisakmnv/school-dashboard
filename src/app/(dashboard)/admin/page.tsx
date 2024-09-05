import UserCard from '@/components/UserCard';
import React from 'react'

const Adminpage = () => {
    return (
        <div className='p-4 flex flex-col md:flex-row gap-4'>
            {/* LEFT */}
            <div className='w-full lg:w-2/3'>
                {/* USER CARD */}
                <div className='flex justify-between flex-wrap gap-4'>
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-full lg:w-1/3'>r</div>
        </div>
    )
}


export default Adminpage;
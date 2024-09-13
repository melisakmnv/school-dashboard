import Annoucement from '@/components/Annoucement';
import BigCalendar from '@/components/Calendar/BigCalendar';
import EventCalendar from '@/components/Calendar/EventCalendar';
import React from 'react'



const StudentPage = () => {
    return (
        <div className='p-4 flex flex-col xl:flex-row gap-4'>
            {/* LEFT */}
            <div className='w-full xl:w-2/3'>
                <div className='h-full bg-white p-4 rouded-md'>
                    <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
                    <BigCalendar/>
                </div>

            </div>
            {/* RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <EventCalendar />
                <Annoucement />
            </div>
        </div>
    )
}


export default StudentPage;  
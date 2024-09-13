import Annoucement from '@/components/Annoucement';
import BigCalendar from '@/components/Calendar/BigCalendar';
import React from 'react'



const ParentPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
            {/* LEFT */}
            <div className='w-full xl:w-2/3'>
                <div className='h-full bg-white p-4 rouded-md'>
                    <h1 className='text-xl font-semibold'>Schedule (John Doe)</h1>
                    <BigCalendar />
                </div>

            </div>
            {/* RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <Annoucement />
            </div>
        </div>
    )
}


export default ParentPage;  
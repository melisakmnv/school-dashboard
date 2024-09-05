import Image from 'next/image';
import React from 'react'


interface UserCardProps {
    type: string;
}
const UserCard = ({ type }: UserCardProps) => {

    return (
        <div className='rounded-2xl odd:bg-PURPLE even:bg-YELLOW p-4 flex-1 min-w-[130px]:'>
            <div className='flex items-center justify-between'>
                <span className='text-[10px] text-green-600 bg-white px-2 py-1 rounded-full '>2024/9</span>
                <Image src={"/more.png"} alt='more' width={20} height={20} />
            </div>
            <h1 className='text-2xl font-semibold my-4'>1,234</h1>
            <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
        </div>
    )
}

export default UserCard
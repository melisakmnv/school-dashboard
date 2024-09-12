"use client"

import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 2,
        title: "Lorem ",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 3,
        title: "Lorem ",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet.",
    },
    // {
    //     id: 4,
    //     title: "Lorem ",
    //     time: "12:00 PM - 2:00 PM",
    //     description: "Lorem ipsum dolor sit amet.",
    // },
]

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />

            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src={"/moreDark.png"} alt='more' width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
                {events.map(event => (
                    <div className='p-5 rounded-md border-2 border-e-gray-100 border-t-4 odd:border-t-BLUE_SKY even:border-t-PURPLE ' key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <span className='text-sm text-gray-300 '>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default EventCalendar
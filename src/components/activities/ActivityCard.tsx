'use client'

import { Activity } from '@/types'

export default function ActivityCard({ activity }: { activity: Activity}) {
    const statusColor = activity.status === 'done' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'

    return (
        <div className='p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition'>
            <h3 className='font-semibold text-lg text-gray-700'>{activity.title}</h3>
            <p className='text-sm text-gray-500'>{activity.date}</p>
            <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded ${statusColor}`}>
                {activity.status}
            </span>
        </div>
    )
}


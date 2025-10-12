import ActivityCard from "@/components/activities/ActivityCard";

const activities = [
    {id: '1', title: 'Team Meeting', date: '2025-10-12', status: 'done'},
    {id: '2', title: 'Code Review', date: '2025-10-13', status: 'pending'},
]

export default function DashboardPage() {
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((a) => ( <ActivityCard key={a.id} activity={a} /> ))}
        </div>
    )
}
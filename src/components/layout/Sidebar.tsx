'use client'

import { useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export default function Sidebar() {
    const router = useRouter()
    const { signOut } = useAuth()

    const handleLogout = async () => {
        await signOut()
        router.push('/login')
    }

    return (
        <aside className='w-64 bg-white shadow-lg h-screen p-5 flex flex-col justify-between'>
            <div>
                <h2 className='text-2xl font-bold mb-6'>AMS</h2>
                <nav className='flex flex-col gap-3'>
                    <button onClick={() => router.push('/dashboard')} className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg'>
                        <LayoutDashboard className='w-5 h-5' /> Dashboard
                    </button>
                </nav>
            </div>

            <button onClick={handleLogout} className='flex items-center gap-2 p-2 text-red-600 hover:bg-red-100 rounded-lg'>
                <LogOut className='w-5 h-5' /> Logout
            </button>
        </aside>
    )
}
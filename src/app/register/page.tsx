'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) return setError(error.message)
            router.push('/login')
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <form onSubmit={handleRegister} className='bg-white p-8 rounded-xl shadow-md w-96'>
                <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>Register</h1>
                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                <input type='email' placeholder='Email' className='w-full mb-3 px-3 py-2 border rounded text-gray-500' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type='password' placeholder='Password' className='w-full mb-4 px-3 py-2 border rounded text-gray-500' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition'>Create Account</button>
                <p className='text-sm text-center mt-3 text-gray-500'>
                    Already have an account?{' '}
                    <a href='/login' className='text-blue-600 underline'>Login</a>
                </p>
            </form>
        </div>
    )
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await res.json()

    if (res.ok) {
      router.push('/login')
    } else {
      setError(data.message || 'Signup failed')
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 text-white flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold mb-4">Join QuizPort Today</h1>
        <p className="text-lg text-white/80">Create an account to get started.</p>
      </div>

      <div className="w-1/2 flex justify-center items-center p-12">
        <form onSubmit={handleSignup} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Sign Up</h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded">
            Create Account
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  )
}

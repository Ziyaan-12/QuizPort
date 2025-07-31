'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.ok) {
      router.push('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-tr from-sky-400 to-blue-700 text-white flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold mb-4">Welcome Back to QuizPort</h1>
        <p className="text-lg text-white/80">Log in to access your test dashboard.</p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center p-12">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Login</h2>

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

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">
            Login
          </button>

          <div className="text-center text-gray-400 text-sm">or</div>

          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full border p-3 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  )
}

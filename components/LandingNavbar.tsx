'use client'

export default function LandingNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-2xl font-bold text-green-600">QuizPort</div>
      <div className="flex items-center gap-6 text-sm">
        <a href="#features" className="hover:text-green-600">Features</a>
        <a href="#cta" className="hover:text-green-600">Get Started</a>
        <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Login</a>
      </div>
    </nav>
  )
}

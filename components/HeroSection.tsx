export default function HeroSection() {
  return (
    <section className="text-center py-20 px-6 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Run Smarter Tests with <span className="text-green-600">QuizPort</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
        Create, manage, and analyze online tests effortlessly. Perfect for education, HR, and training.
      </p>
      <a
        href="/signup"
        className="inline-block bg-green-600 text-white px-6 py-3 text-sm rounded hover:bg-green-700 transition"
      >
        Get Started Free
      </a>
    </section>
  )
}

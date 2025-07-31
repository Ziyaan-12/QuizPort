export default function CTASection() {
  return (
    <section
      id="cta"
      className="bg-green-600 text-white text-center py-20 px-6"
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to launch your first test?
      </h2>
      <p className="mb-6 text-lg">Start for free — no credit card required.</p>
      <a
        href="/signup"
        className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
      >
        Sign Up Now
      </a>
    </section>
  )
}

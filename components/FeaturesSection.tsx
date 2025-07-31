export default function FeaturesSection() {
  const features = [
    {
      title: 'Secure Google Login',
      desc: 'No passwords needed — just sign in with Google securely.',
    },
    {
      title: 'Auto Scoring & Results',
      desc: 'Instantly analyze scores with intelligent test analytics.',
    },
    {
      title: 'Student Management',
      desc: 'Track participants, attempts, and export results easily.',
    },
  ]

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuizPort?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

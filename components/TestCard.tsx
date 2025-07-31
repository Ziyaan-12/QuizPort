interface TestCardProps {
  test: {
    title: string
    status: string
    createdAt: string
    avgScore: string | null
    results: string | null
  }
}

export default function TestCard({ test }: TestCardProps) {
  return (
    <div className="bg-white p-5 rounded shadow-sm border">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          test.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
        }`}>
          {test.status}
        </span>
        <span>CREATED: {test.createdAt}</span>
      </div>

      <h3 className="mt-3 font-semibold text-lg">{test.title}</h3>
      <p className="text-sm text-gray-400 mb-4">(no description)</p>

      {test.avgScore && test.results ? (
        <div className="text-sm text-gray-700 flex gap-4">
          <span>📊 {test.avgScore} avg. score</span>
          <span>📁 Results ({test.results})</span>
        </div>
      ) : (
        <div className="text-sm text-gray-400">Uncategorized</div>
      )}
    </div>
  )
}

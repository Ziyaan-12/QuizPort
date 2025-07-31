export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-center gap-4">
        <select className="border rounded px-3 py-1 text-sm">
          <option>All categories</option>
        </select>
        <button className="text-sm text-blue-600 underline">Manage categories</button>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded">Generate questions</button>
        <button className="bg-green-500 text-white px-4 py-2 text-sm rounded">New test</button>
      </div>
    </div>
  )
}

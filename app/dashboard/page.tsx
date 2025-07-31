import DashboardSidebar from '@/components/DashboardSidebar'
import DashboardHeader from '@/components/DashboardHeader'
import TestCard from '@/components/TestCard'

const mockTests = [
  {
    title: "Example Quiz for Restaurant Staff",
    status: "SETUP IN PROGRESS",
    createdAt: "2025-07-30",
    avgScore: null,
    results: null,
  },
  {
    title: "Example Customer Care Periodic Test",
    status: "SETUP IN PROGRESS",
    createdAt: "2025-07-30",
    avgScore: null,
    results: null,
  },
  {
    title: "Example Product Knowledge Test for Sales",
    status: "SETUP IN PROGRESS",
    createdAt: "2025-07-30",
    avgScore: null,
    results: null,
  },
  {
    title: "Example Reasoning Test",
    status: "ACTIVE",
    createdAt: "2025-07-30",
    avgScore: "50.6%",
    results: "30",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 p-6">
        <DashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {mockTests.map((test, index) => (
            <TestCard key={index} test={test} />
          ))}
        </div>
      </main>
    </div>
  )
}

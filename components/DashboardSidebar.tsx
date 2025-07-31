'use client'

import { Home, Users, BarChart, Settings, LogOut } from 'lucide-react'

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm border-r">
      <div className="p-6 font-bold text-xl text-green-600">QuizPort</div>
      <nav className="flex flex-col gap-2 px-4">
        <NavItem icon={<Home size={18} />} label="My tests" />
        <NavItem icon={<Users size={18} />} label="Respondents" />
        <NavItem icon={<BarChart size={18} />} label="Results database" />
        <NavItem icon={<Settings size={18} />} label="My account" />
      </nav>

      <div className="mt-auto px-4 pb-6 flex flex-col gap-2">
        <NavItem icon={<LogOut size={18} />} label="Sign out" />
      </div>
    </aside>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer py-2">
      {icon}
      <span>{label}</span>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { Header } from './header/Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev)
  }

  return (
    <div className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="p-big-layout overflow-x-hidden max-h-screen relative">
        <Header /> {/* No need to pass toggleSidebar to Header */}
        {children}
      </main>
    </div>
  )
}

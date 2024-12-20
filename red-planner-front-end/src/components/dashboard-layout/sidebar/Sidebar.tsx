'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { COLORS } from '@/constants/color.constants'
import { MENU } from './menu.data'
import { SidebarFooter } from './SidebarFooter'
import { SidebarToggleButton } from './SidebarToggleButton'
import { MenuItem } from './Menuitem'
import React from 'react'

interface SidebarProps {
  isCollapsed: boolean
  toggleSidebar: () => void
}

export const Sidebar = React.memo(
  ({ isCollapsed, toggleSidebar }: SidebarProps) => {
    return (
      <nav
        className={`border-r border-r-border h-full bg-sidebar flex flex-col justify-between transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-64'} relative`}
        role='navigation'
        aria-label='Main sidebar'
      >
        <div className='flex flex-col flex-grow'>
          <Link
            href='/'
            className='flex items-center gap-2.5 p-layout border-b border-b-border'
            aria-label='Go to homepage'
          >
            <GanttChartSquare
              color={COLORS.primary}
              size={38}
            />
            {!isCollapsed && (
              <span className='text-2xl font-bold relative'>MyPlanner</span>
            )}
          </Link>

          <div className='p-1.5 relative overflow-visible'>
            {MENU.map(item => (
              <MenuItem
                item={item}
                key={item.link}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </div>

        {/* Footer component */}
        {!isCollapsed && <SidebarFooter />}

        {/* Sidebar Toggle Button */}
        <SidebarToggleButton
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
        />
      </nav>
    )
  }
)

Sidebar.displayName = 'Sidebar'

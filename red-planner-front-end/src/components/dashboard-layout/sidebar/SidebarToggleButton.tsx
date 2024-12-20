import { FC } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface SidebarToggleButtonProps {
  isCollapsed: boolean
  toggleSidebar: () => void
}

export const SidebarToggleButton: FC<SidebarToggleButtonProps> = ({ isCollapsed, toggleSidebar }) => (
  <div className='flex justify-center items-center pb-4'>
    <button
      onClick={toggleSidebar}
      className='bg-primary p-2 rounded-full text-white hover:bg-primaryHover transition'
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      {isCollapsed ? <ChevronRight size={26} /> : <ChevronLeft size={26} />}
    </button>
  </div>
)

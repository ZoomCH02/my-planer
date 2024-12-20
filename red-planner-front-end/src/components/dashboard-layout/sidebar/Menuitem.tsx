import Link from 'next/link'
import { IMenuItem } from './menu.interface'

interface MenuItemProps {
  item: IMenuItem
  isCollapsed: boolean
}

export function MenuItem({ item, isCollapsed }: MenuItemProps) {
  return (
    <div>
      <Link
        href={item.link}
        className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
      >
        {/* Иконка с динамическим размером */}
        <item.icon size={26} />
        {!isCollapsed && <span>{item.name}</span>}
      </Link>
    </div>
  )
}

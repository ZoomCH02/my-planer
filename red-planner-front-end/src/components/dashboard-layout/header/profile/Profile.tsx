'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'
import { LogoutButton } from '../../sidebar/LogoutButton'

export function Profile() {
  const { data, isLoading } = useProfile()

  return (
    <div className='absolute top-big-layout right-big-layout flex items-center'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex items-center'>
          <div className='text-right mr-3'>
            <p className='font-bold -mb-1'>{data?.user.name}</p>
            <p className='text-sm opacity-40'>{data?.user.email}</p>
          </div>

          {/* Аватарка */}
          <div className='w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase'>
            {data?.user.name?.charAt(0) || 'A'}
          </div>

          {/* Кнопка выхода, выровнена по центру с аватаркой */}
          <div className='ml-4 flex items-center'>
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  )
}

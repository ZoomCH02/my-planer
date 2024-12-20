import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { DayPicker, type Formatters } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOutside'

import './DatePicker.scss'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
  onChange: (value: string) => void
  value: string
  position?: 'left' | 'right'
}

export function DatePicker({
  onChange,
  value,
  position = 'right'
}: IDatePicker) {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)
  const dayPickerRef = useRef<HTMLDivElement>(null)

  const handleDaySelect = (date: Date | undefined): void => {
    const ISOdate = date?.toISOString();
  
    setSelected(date);
    if (ISOdate) {
      onChange(ISOdate);
      setIsShow(false);
    } else {
      onChange('');
    }
  };  

  useEffect(() => {
    if (isShow && dayPickerRef.current) {
      dayPickerRef.current.focus()
    }
  }, [isShow])

  return (
    <div
      className='relative'
      ref={ref}
    >
      <button onClick={() => setIsShow(!isShow)}>
        {value ? dayjs(value).format('LL') : 'Click for select'}
      </button>
      {value && (
        <button
          className='absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity'
          onClick={() => onChange('')}
        >
          <X size={14} />
        </button>
      )}
      {isShow && (
        <div
          className={cn(
            'absolute p-2.5 slide bg-sidebar z-10 shadow rounded-lg',
            position === 'left' ? '-left-4' : ' -right-4'
          )}
          style={{
            top: 'calc(100% + .7rem)'
          }}
          ref={dayPickerRef}
          tabIndex={-1} // Ensure the element is focusable
        >
          <DayPicker
            mode='single'
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
            weekStartsOn={1}
            formatters={{ formatCaption }}
            disabled={{
              before: new Date(2023, 0, 1),
              after: new Date(2054, 11, 31)
            }}
          />
        </div>
      )}
    </div>
  )
}

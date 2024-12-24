'use client';
import { vi } from 'date-fns/locale';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

interface Range {
  from?: Date;
  to?: Date;
}

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);
  const handleSetDate = (dateSelected: Date | undefined) => {
    if (!dateSelected) {
      setDate((prev) => prev);
      return;
    }
    setDate(dateSelected);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <a className='font-mono font-bold' href='/counter'>
          To counter screen
        </a>
        <AppCalendar className='rounded-md border' mode='single' onSelect={setDate} selected={date} />
      </div>
    </main>
  );
}

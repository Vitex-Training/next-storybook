'use client'
import { counterStore } from 'src/app/(pages)/counter/state'
import { useEffect } from 'react'

export const Counter = () => {
  const count = counterStore.use.count()
  const countEven = counterStore.use.countEven()

  return (
    <div>
      <h1>
        Counter:
        {count}
      </h1>
      <h3>
        Even Counter:
        {countEven}
      </h3>
    </div>
  )
}

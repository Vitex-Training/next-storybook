'use client'
import { Counter } from 'src/app/(pages)/counter/components/Counter'
import { CounterController } from 'src/app/(pages)/counter/components/CounterController'
import { useRouter } from 'next/navigation'

export const CounterPage = () => {
  const router = useRouter()

  return (
    <>
      <Counter />
      <CounterController />
      <button onClick={() => router.push('/')}>Navigate to homepage</button>
    </>
  )
}

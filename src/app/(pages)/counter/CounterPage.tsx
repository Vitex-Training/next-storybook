'use client';
import { Provider } from 'jotai';
import { useRouter } from 'next/navigation';

import { Counter } from './components/Counter';
import { CounterController } from './components/CounterController';
import { counterStore } from './state';

export const CounterPage = () => {
  const router = useRouter();

  return (
    <Provider store={counterStore}>
      <Counter />
      <CounterController />
      <button onClick={() => router.push('/')}>Navigate to homepage</button>
    </Provider>
  );
};

'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SidebarPreview } from 'src/shared/components/sidebar/AppSidebar';

export const CounterPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    // <Provider store={counterStore}>
    //   <Counter />
    //   <CounterController />
    //   <button onClick={() => router.push('/')}>Navigate to homepage</button>
    // </Provider>
    <SidebarPreview />
  );
};

'use client';
import { AppTabs, AppTabsContent, AppTabsList, AppTabsTrigger } from 'src/shared/components/tabs/AppTabs';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <a className='font-mono font-bold' href='/counter'>
          To counter screen
        </a>
        <AppTabs defaultValue='tg1' dir='center' orientation='vertical'>
          <AppTabsList>
            <AppTabsTrigger value='tg1'>Trigger1</AppTabsTrigger>
            <AppTabsTrigger value='tg2'>Trigger2</AppTabsTrigger>
            <AppTabsTrigger value='tg3'>Trigger3</AppTabsTrigger>
          </AppTabsList>
          <AppTabsContent className='h-20 w-96 rounded-md border p-3' value='tg1'>
            Content1
          </AppTabsContent>
          <AppTabsContent className='h-20 w-96 rounded-md border p-3' value='tg2'>
            Content2
          </AppTabsContent>
          <AppTabsContent className='h-20 w-96 rounded-md border p-3' value='tg3'>
            Content3
          </AppTabsContent>
        </AppTabs>
      </div>
    </main>
  );
}

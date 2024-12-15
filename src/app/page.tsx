import {
  AppAccordion,
  AppAccordionContent,
  AppAccordionItem,
  AppAccordionTrigger,
} from 'src/shared/components/accordion/AppAccordion';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <AppAccordion className='w-full' collapsible={false} type='single'>
          <AppAccordionItem value='item-1'>
            <AppAccordionTrigger>Oh my god oh hell nah man</AppAccordionTrigger>
            <AppAccordionContent>What the fuck man</AppAccordionContent>
          </AppAccordionItem>
          <AppAccordionItem value='item-2'>
            <AppAccordionTrigger iconPosition='start'>vjppro</AppAccordionTrigger>
            <AppAccordionContent>Waasjcnk</AppAccordionContent>
          </AppAccordionItem>
          <AppAccordionItem value='item-3'>
            <AppAccordionTrigger>Ahiahi</AppAccordionTrigger>
            <AppAccordionContent>Omy god</AppAccordionContent>
          </AppAccordionItem>
        </AppAccordion>
      </div>
    </main>
  );
}

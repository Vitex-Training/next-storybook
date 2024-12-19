'use client';
import { AlertContainer } from 'src/shared/components/alert/AlertContainer';
import { useAlert } from 'src/shared/hooks/useAlert';

export default function Home() {
  const { addAlert } = useAlert();

  const handleAddAlert = (type: string) => {
    switch (type) {
      case 'error':
        addAlert('This is first alert', {
          position: 'center',
          type,
        });
        return;
      case 'info':
        addAlert('This is first alert', {
          position: 'center',
          type,
        });
        return;
      case 'success':
        addAlert('This is first alert', {
          position: 'center',
          type,
        });
        return;
      case 'warning':
        addAlert('This is first alert', {
          position: 'center',
          type,
        });
        return;
    }
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <AlertContainer />
      <div className='flex items-center gap-4'>
        <button
          className='rounded-md border border-green-800 px-3 py-2'
          onClick={() => handleAddAlert('success')}
          type='button'>
          Add Alert Success
        </button>
        <button
          className='rounded-md border border-red-800 px-3 py-2'
          onClick={() => handleAddAlert('error')}
          type='button'>
          Add Alert Error
        </button>
        <button className='rounded-md border border-orange-800 px-3 py-2' onClick={() => handleAddAlert('warning')}>
          Add Alert Warning
        </button>
        <button className='rounded-md border border-blue-800 px-3 py-2' onClick={() => handleAddAlert('info')}>
          Add Alert Info
        </button>
      </div>
    </div>
  );
}

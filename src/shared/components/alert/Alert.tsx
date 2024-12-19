import { useEffect } from 'react';

import CloseIcon from './assets/close.svg';
import ErrorIcon from './assets/error.svg';
import InfoIcon from './assets/info.svg';
import SuccessIcon from './assets/success.svg';
import WarningIcon from './assets/warning.svg';

export type AlertType = 'error' | 'info' | 'success' | 'warning';

export interface AlertProps {
  readonly autoClose?: number; // Time auto close the alert
  readonly idx: number;
  readonly message: string;
  readonly onClose: (id: number) => void; // Function to be called when the alert is closed by the user or automatically closed
  readonly type: AlertType;
}

const Alert = ({ autoClose = 5000, idx, message, onClose, type = 'info' }: AlertProps) => {
  useEffect(() => {
    if (autoClose > 0) {
      const timer = setTimeout(() => onClose(idx), autoClose);
      return () => clearTimeout(timer);
    }
  }, [idx, onClose, autoClose]);

  const alertTypeClasses = {
    error: 'bg-red-200 text-red-800',
    info: 'bg-blue-200 text-blue-800',
    success: 'bg-green-200 text-green-800',
    warning: 'bg-orange-200 text-orange-800',
  };

  const IconAlert = () => {
    switch (type) {
      case 'error':
        return <ErrorIcon className='fill-red-800' />;
      case 'info':
        return <InfoIcon className='fill-blue-800' />;
      case 'success':
        return <SuccessIcon className='fill-green-800' />;
      case 'warning':
        return <WarningIcon className='fill-orange-800' />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`z-50 mt-3 flex max-w-[360px] items-center justify-between gap-4 rounded-lg px-3 py-2 shadow-md transition-all duration-300 ${alertTypeClasses[type]}`}>
      <div className='flex items-center gap-2'>
        <IconAlert />
        <span>{message}</span>
      </div>
      <button className='cursor-pointer' onClick={() => onClose(idx)}>
        <CloseIcon className='size-4 fill-[#757575]' />
      </button>
    </div>
  );
};

export default Alert;

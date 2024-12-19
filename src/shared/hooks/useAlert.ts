import { useContext } from 'react';

import { AlertContext } from '../context/AlertContext';

export const useAlert = () => {
  const alertContext = useContext(AlertContext);
  if (!alertContext) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  const { addAlert, alerts, removeAlert } = alertContext;

  return { addAlert, alerts, removeAlert };
};

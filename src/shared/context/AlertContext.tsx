import React, { createContext, useState } from 'react';

import { AlertType } from '../components/alert/Alert';
import { AlertPosition } from '../components/alert/AlertContainer';

export interface AlertConfig {
  autoclose?: number;
  duration?: number;
  position?: AlertPosition;
  type: AlertType;
}

interface AlertContextProps {
  addAlert: (message: string, config: AlertConfig) => void;
  alerts: { config: AlertConfig; message: string }[];
  removeAlert: (index: number) => void;
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<{ config: AlertConfig; message: string }[]>([]);

  const addAlert = (message: string, config: AlertConfig) => {
    setAlerts((prev) => [...prev, { config, message }]);
  };

  const removeAlert = (index: number) => {
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  };

  return <AlertContext.Provider value={{ addAlert, alerts, removeAlert }}>{children}</AlertContext.Provider>;
};

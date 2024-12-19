import { useAlert } from 'src/shared/hooks/useAlert';

import Alert from './Alert';

export type AlertPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'top-center'
  | 'top-left'
  | 'top-right';

export interface AlertContainerProps {
  readonly autoClose?: number; // Time auto close the alert
  readonly position?: AlertPosition;
}

export const AlertContainer = ({ autoClose, position = 'top-center' }: AlertContainerProps) => {
  const { alerts, removeAlert } = useAlert();

  const positionClass = {
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
  };

  return (
    <div className={`fixed ${positionClass[position]}`}>
      {alerts.map((toast, idx) => {
        return (
          <Alert
            autoClose={autoClose}
            {...toast.config}
            idx={idx}
            key={idx}
            message={toast.message}
            onClose={removeAlert}
          />
        );
      })}
    </div>
  );
};

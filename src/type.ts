export interface AlertProps {
    message: string;
    open: boolean;
    onClose : Function
    color: string;
    duration?: number;  
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'; 
  }
  
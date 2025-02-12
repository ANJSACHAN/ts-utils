export interface AlertProps {
    message: string;
    open: boolean;
    onClose: () => void;
    color: string;
    duration?: number;
    textColor?: string;
    iconColor?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
}

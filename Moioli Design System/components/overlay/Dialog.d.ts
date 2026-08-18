export interface DialogProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

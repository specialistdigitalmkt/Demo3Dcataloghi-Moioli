export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'number';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error message; shown below the field and switches the border to red */
  error?: string;
}

import { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Error message to display below the input */
  error?: string;
  /** Label text to display above the input */
  label?: string;
}

/**
 * Form input component with built-in accessibility and error handling
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   error={errors.email}
 *   onChange={handleChange}
 * />
 * ```
 */
export const Input = memo(function Input({ 
  error, 
  className, 
  label,
  id,
  'aria-label': ariaLabel,
  ...props 
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`;
  
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input 
        id={inputId}
        className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
        aria-label={!label ? ariaLabel : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}); 
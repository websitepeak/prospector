import { ButtonHTMLAttributes, memo } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: 'primary' | 'secondary';
  /** Accessible label for the button when visual text is not descriptive enough */
  'aria-label'?: string;
}

/**
 * Primary UI component for user interaction
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = memo(function Button({ 
  variant = 'primary', 
  className, 
  'aria-label': ariaLabel,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.button} ${styles[`button--${variant}`]} ${className || ''}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}); 
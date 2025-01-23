import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import styles from './Button.module.css';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toBeNull();
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole('button');
    const classes = button.className.split(' ');
    expect(classes).toContain(styles['button--secondary']);
  });
}); 
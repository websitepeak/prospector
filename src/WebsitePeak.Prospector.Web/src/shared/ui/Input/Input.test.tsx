import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input).not.toBeNull();
  });

  it('shows error message when provided', () => {
    render(<Input error="Required field" />);
    const alert = screen.getByRole('alert');
    expect(alert.textContent).toBe('Required field');
  });

  it('applies error styles when error exists', () => {
    render(<Input error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });
}); 
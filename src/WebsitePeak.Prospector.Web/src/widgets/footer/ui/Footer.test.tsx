import { describe, it, expect } from 'vitest';
import { render, screen } from '@/shared/lib/test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders all navigation sections', () => {
    render(<Footer />);
    expect(screen.getByText('Product')).not.toBeNull();
    expect(screen.getByText('Company')).not.toBeNull();
    expect(screen.getByText('Legal')).not.toBeNull();
  });

  it('applies custom className', () => {
    render(<Footer className="custom" />);
    const footer = screen.getByRole('contentinfo');
    const classes = footer.className.split(' ');
    expect(classes).toContain('custom');
  });
}); 
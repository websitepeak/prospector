import { describe, it, expect } from 'vitest';
import { render, screen } from '@/shared/lib/test-utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders logo and navigation', () => {
    render(<Header />);
    expect(screen.getByText('WebsitePeak')).not.toBeNull();
    expect(screen.getByText('Dashboard')).not.toBeNull();
    expect(screen.getByText('Start Prospecting')).not.toBeNull();
  });

  it('applies custom className', () => {
    render(<Header className="custom" />);
    const header = screen.getByRole('banner');
    const classes = header.className.split(' ');
    expect(classes).toContain('custom');
  });
}); 
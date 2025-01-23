import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Prevent console.error from cluttering test output
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    const content = screen.getByText('Test content');
    expect(content).not.toBeNull();
  });

  it('renders error UI when error occurs', () => {
    const TestError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText('Sorry.. there was an error');
    const errorDetail = screen.getByText('Test error');
    expect(errorMessage).not.toBeNull();
    expect(errorDetail).not.toBeNull();
  });
}); 
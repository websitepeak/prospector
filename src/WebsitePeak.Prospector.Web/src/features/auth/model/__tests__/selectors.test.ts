import { selectIsAuthenticated, selectUser } from '../selectors';
import type { RootState } from '@/app/store';

describe('auth selectors', () => {
  const mockUser = {
    id: '1',
    email: 'test@example.com',
  };

  const mockState = {
    auth: {
      isAuthenticated: true,
      user: mockUser,
    },
  } as RootState;

  it('should select authentication status', () => {
    const result = selectIsAuthenticated(mockState);
    expect(result).toBe(true);
  });

  it('should select user', () => {
    const result = selectUser(mockState);
    expect(result).toEqual(mockUser);
  });
}); 
import { authReducer, authSlice } from '../slice';

describe('auth slice', () => {
  const mockUser = {
    id: '1',
    email: 'test@example.com',
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({
      isAuthenticated: false,
      user: null,
    });
  });

  it('should handle setUser', () => {
    const actual = authReducer(
      { isAuthenticated: false, user: null },
      authSlice.actions.setUser(mockUser)
    );
    expect(actual.isAuthenticated).toBe(true);
    expect(actual.user).toEqual(mockUser);
  });

  it('should handle logout', () => {
    const actual = authReducer(
      { isAuthenticated: true, user: mockUser },
      authSlice.actions.logout()
    );
    expect(actual.isAuthenticated).toBe(false);
    expect(actual.user).toBeNull();
  });
}); 
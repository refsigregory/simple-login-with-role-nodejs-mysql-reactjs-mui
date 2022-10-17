import authReducer, {
  clearAuth,
  setAuth
} from '../login/authSlice';

  describe('users reducer', () => {
    const initialState = {
      data: {},
    };

    it('should handle initial state', () => {
      expect(authReducer(undefined, { type: 'unknown' })).toEqual({
        data: {},
      });
    });
    
    it('should save auth data', () => {
      const actual = authReducer(initialState, setAuth({
        username: 'test',
      }));
      expect(actual.data.payload.username).toEqual('test');
    });

    it('should clear auth data', () => {
      const actual = authReducer(initialState, clearAuth());
      expect(actual.data.payload).toEqual(undefined);
    });
  
  });
  
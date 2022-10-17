import usersReducer from '../users/usersSlice';

  describe('users reducer', () => {

    it('should handle initial state', () => {
      expect(usersReducer(undefined, { type: 'unknown' })).toEqual([]);
    });

  });
  
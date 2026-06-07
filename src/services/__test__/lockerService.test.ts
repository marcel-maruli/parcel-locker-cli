import * as lockerSvc from '@services/lockerService';
import { state } from '@store';

describe('Locker Service', () => {
  beforeEach(() => {
    state.lockers.clear();
  });

  test('should register a new locker', () => {
    lockerSvc.addLocker('1');
    expect(state.lockers.has('1')).toBe(true);
  });

  test('should not reserve an unavailable locker', () => {
    lockerSvc.addLocker('1');
    lockerSvc.reserveLocker('1', 'userA');
    
    expect(() => lockerSvc.reserveLocker('1', 'userB')).toThrow();
  });
});
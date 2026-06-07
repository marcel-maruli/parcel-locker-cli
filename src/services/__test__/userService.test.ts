import { state } from '@store';
import { getUserStatus } from '@services/userService';

describe('User Service - getUserStatus', () => {
  beforeEach(() => {
    state.lockers.clear();
    state.queues.clear();
  });

  test('Should return correct status when user has no assignments', () => {
    const status = getUserStatus('Alice');
    expect(status).toContain('Assigned lockers:');
    expect(status).toContain('Waiting queues:');
  });

  test('Should display assigned locker and queue position correctly', () => {
    const user = 'Alice';
    
    state.lockers.set('1', { id: '1', status: { user: user } } as any);
    state.queues.set('2', ['Bob', user]);

    const status = getUserStatus(user);

    expect(status).toContain('1. 1');
    expect(status).toContain('2 -> position 2');
  });
});
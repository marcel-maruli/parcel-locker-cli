import { state } from '../store';

export const joinQueue = (lockerId: string, user: string) => {
  if (!state.lockers.has(lockerId)) throw new Error("Locker does not exist.");
  
  const queue = state.queues.get(lockerId) || [];
  if (queue.includes(user)) throw new Error("You are already in this queue.");
  
    if (!state.lockers.has(lockerId)) throw new Error("Locker does not exist.");
  
  queue.push(user);
  state.queues.set(lockerId, queue);
};

export const processQueue = (lockerId: string) => {
  const queue = state.queues.get(lockerId);
  if (queue && queue.length > 0) {
    const nextUser = queue.shift()!;
    const locker = state.lockers.get(lockerId)!;
    locker.status = { type: 'RESERVED', user: nextUser };
    
    const notes = state.userNotifications.get(nextUser) || [];
    notes.push(`Notification: Locker ${lockerId} has been assigned to you.`);
    state.userNotifications.set(nextUser, notes);
  }
};
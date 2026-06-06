export type LockerStatus = 'AVAILABLE' | { type: 'RESERVED'; user: string };

export type Locker = {
  id: string;
  status: LockerStatus;
}

export const state = {
  lockers: new Map<string, Locker>(),
  queues: new Map<string, string[]>(), 
  userNotifications: new Map<string, string[]>(),
  currentUser: null as string | null
};
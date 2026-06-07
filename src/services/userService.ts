import { state } from '../store';

export const getUserStatus = (user: string): string => {
    const lockers = Array.from(state.lockers?.values() ?? []);
    const userLockers = lockers.filter(list => list.status !== "AVAILABLE" && list.status.user === user);
    
    const queues = Array.from(state.queues?.entries() ?? []);
    const userQueues = queues.filter(([_, list]) => list.includes(user));

    const lockerText = userLockers.length > 0 
        ? userLockers.map((l, i) => `${i + 1}. ${l.id}`).join("\n") 
        : "No lockers assigned.";

    const queueText = userQueues.length > 0 
        ? userQueues.map(([id, list], i) => `${i + 1}. ${id} -> position ${list.indexOf(user) + 1}`).join("\n")
        : "Not in any queue.";

    return `Assigned lockers:\n${lockerText}\n\nWaiting queues:\n${queueText}`;
};

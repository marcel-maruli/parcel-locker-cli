import { state } from "@store";
import * as queueSvc from "@services/queueService";
import * as lockerSvc from "@services/lockerService";

describe("Queue Service", () => {
  beforeEach(() => {
    state.queues.clear();
    state.lockers.clear();
  });

  test("should add a user to the queue for a specific locker", () => {
    const lockerId = "1";
    const user = "Alice";

    lockerSvc.addLocker(lockerId);
    queueSvc.joinQueue(lockerId, user);

    expect(state.queues.has(lockerId)).toBe(true);
    expect(state.queues.get(lockerId)).toContain(user);
  });

  test("should maintain order in the queue", () => {
    const lockerId = "1";

    lockerSvc.addLocker(lockerId);

    queueSvc.joinQueue(lockerId, "Alice");
    queueSvc.joinQueue(lockerId, "Bob");

    const queue = state.queues.get(lockerId);
    expect(queue).toEqual(["Alice", "Bob"]);
  });

  test("should not add the same user twice to the same queue", () => {
    const lockerId = "1";
    const user = "Alice";

    lockerSvc.addLocker(lockerId);

    queueSvc.joinQueue(lockerId, user);

    expect(() => queueSvc.joinQueue(lockerId, user)).toThrow("You are already in this queue.");
  });
});

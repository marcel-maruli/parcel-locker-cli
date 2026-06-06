import { state } from "../store";
import { processQueue } from "./queueService";

export const addLocker = (id: string) => {
  if (state.lockers.has(id)) throw new Error("Locker already exists.");
  if (!id) throw new Error("Locker's ID is required!");
  state.lockers.set(id, { id, status: "AVAILABLE" });
};

export const reserveLocker = (lockerId: string, user: string) => {
  const locker = state.lockers.get(lockerId);
  if (!locker) throw new Error("Locker not found.");
  if (locker.status !== "AVAILABLE")
    throw new Error("Locker is not available.");

  locker.status = { type: "RESERVED", user };
  return `Locker ${lockerId} has been reserved for you.`;
};

export const releaseLocker = (lockerId: string, user: string) => {
  const locker = state.lockers.get(lockerId);
  if (!locker) throw new Error("Locker not found.");

  if (locker.status === "AVAILABLE" || (locker.status as any).user !== user) {
    throw new Error("You do not have this locker reserved.");
  }

  locker.status = "AVAILABLE";
  processQueue(lockerId);
  return `Locker ${lockerId} released.`;
};

export const formatLockerList = (): string => {
  const lockers = Array.from(state.lockers.values());
  if (lockers.length === 0) return "No lockers registered.";
  return lockers
    .map((l) => {
      const statusText =
        l.status === "AVAILABLE"
          ? "AVAILABLE"
          : `RESERVED by ${(l.status as any).user}`;
      return `${l.id} - ${statusText}`;
    })
    .join("\n");
};

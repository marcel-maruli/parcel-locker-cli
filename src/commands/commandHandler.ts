import { state } from "../store";
import * as lockerSvc from "../services/lockerService";
import * as queueSvc from "../services/queueService";
import { getSuggestion } from "../utils/getSuggestion";

export const handleCommand = (cmd: string, args: string[]): string => {
  const user = state.currentUser;

  switch (cmd) {
    case "add-locker":
      if (user !== "admin") return "Error: Unauthorized.";
      lockerSvc.addLocker(args[0] as string);
      return `Locker ${args[0]} registered.`;

    case "reserve":
      return lockerSvc.reserveLocker(args[0] as string, user!);

    case "release":
      return lockerSvc.releaseLocker(args[0] as string, user!);

    case "queue":
      queueSvc.joinQueue(args[0] as string, user!);
      return `Joined queue for ${args[0]}.`;

    case "list-lockers":
      return lockerSvc.formatLockerList();

    default:
      return getSuggestion(cmd) || "";
  }
};

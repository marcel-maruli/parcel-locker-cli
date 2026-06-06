export const showHelp = () => {
  const helpText = `
============================================================
           PARCEL LOCKER CLI - COMMAND REFERENCE
============================================================

SESSION MANAGEMENT:
  login <name>       : Start a session as a user.
  logout             : End the current session.

LOCKER OPERATIONS:
  reserve            : Reserve the nearest available locker.
  release <id>       : Free up a specific locker (e.g., release 1).
  status             : Show availability of all lockers.

QUEUE MANAGEMENT:
  queue              : View the list of users waiting for a locker.

SYSTEM:
  help               : Display this help message.
  exit               : Terminate the application.

NOTES:
- You must 'login' before performing any operations.
- Locker IDs are numeric and start from 1.
============================================================
           PARCEL LOCKER SYSTEM - COMMANDS 
                    (AFTER LOGIN)
============================================================
ADMIN ONLY:
  add-locker <id>      : Register a new locker.

USER OPERATIONS:
  reserve <id>         : Reserve a specific locker.
  release <id>         : Release your current locker.
  queue <id>           : Join the queue for a specific locker.

VIEWING:
  list-lockers         : Show all lockers and their status.
  status               : Show detailed system status.

SYSTEM:
  help                 : Display this help message.
  exit                 : Exit the application.
============================================================`;

  console.log(helpText);
};

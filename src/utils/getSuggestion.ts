const COMMANDS = [
  "add-locker",
  "reserve",
  "release",
  "queue",
  "list-lockers",
  "status",
  "help",
  "exit",
  "login",
  "logout",
];

export const getSuggestion = (input: string): string | null => {
  const suggestion = COMMANDS.find((cmd) => cmd.includes(input.toLowerCase()));

  if (!suggestion)
    return `Unknown command: "${input}". Type "help" for a list.`;

  return `Unknown command: "${input}". Did you mean "${suggestion}"?`;
};

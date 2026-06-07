import * as readline from "readline";
import { state } from "./store";
import { handleCommand } from "./commands/commandHandler";
import { showHelp } from "./commands/commandHelp";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});
process.stdout.write("\x1Bc");

console.log("--- Parcel Locker Management System ---");
console.log('Type "help" to see the command list.');
console.log("----------------------------------------");


rl.prompt();

rl.on("line", (line) => {
  const [cmd, ...args] = line.trim().split(" ");

  if (cmd === "help") {
    showHelp();
  }
  if (cmd === "login") {
    if (!args[0]) {
      console.log("Username not found!");
    } else {
      state.currentUser = String(args[0]);

      console.log(`Hello, ${args[0]}!`);
      const notes = state.userNotifications.get(args[0] as string);
      if (notes) notes.forEach((n) => console.log(n));
    }
  } else if (cmd === "logout") {
    if (state.currentUser === null) {
      console.log("No login user!");
    } else {
      state.currentUser = null;
      console.log("Goodbye!");
    }
  } else if (state.currentUser) {
    try {
      console.log(handleCommand(cmd as string, args));
    } catch (e: any) {
      console.log(`Error: ${e.message}`);
    }
  } else {
    console.log("Please login first.");
  }
  rl.prompt();
});

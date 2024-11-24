#!/usr/bin/env node

import figlet from "figlet";
import inquirer from "inquirer";

import { log, clear } from "./utils/logger.ts";

import { registerMatch } from "./registerMatch.ts";
import { matchHistory } from "./matchHistory.ts";
import { manageMatches } from "./manageMatches.ts";
import { overallStats } from "./overallStats.ts";

export const init = async () => {
  clear();
  log(
    "\n" +
      figlet.textSync("owtrack", {
        font: "Banner3-D",
        horizontalLayout: "full",
      }) +
      "\n"
  );

  const answer = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "Select an action:",
    choices: [
      "Register Match",
      "Overall Stats",
      "Match History",
      "Manage Matches",
      "Quit",
    ],
  });

  return handleMenu(answer.menu);
};

const handleMenu = (answer: string) => {
  const choice = answer.replaceAll(" ", "_").toLowerCase();
  if (choice === "register_match") return registerMatch();
  if (choice === "overall_stats") return overallStats();
  if (choice === "match_history") return matchHistory();
  if (choice === "manage_matches") return manageMatches();
  if (choice === "quit") return process.exit(0);
};

init();

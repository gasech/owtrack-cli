import inquirer from "inquirer";
import { init } from "./index.ts";

import { deleteAllMatches, deleteMatchById } from "./utils/match.ts";
import { askReturnMenu } from "./utils/prompt.ts";
import { createSpinner } from "nanospinner";
import { sleep } from "./utils/logger.ts";

export const manageMatches = async () => {
  const answer = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "Please select any of the options below",
    choices: ["Delete match by id", "Delete all matches", "Go back to menu"],
  });

  handleMenu(answer.menu);
};

const handleMenu = (answer: string) => {
  answer = answer.replaceAll(" ", "_").toLowerCase();

  if (answer === "delete_match_by_id") return askDeleteMatchById();
  if (answer === "delete_all_matches") return askDeleteAllMatches();
  if (answer === "go_back_to_menu") return init();
};

const askDeleteAllMatches = async () => {
  const spinner = createSpinner("Deleting all matches...").start();
  await sleep();

  if (deleteAllMatches()) {
    spinner.success({ text: "Successfully deleted all matches." });
  } else {
    spinner.error({ text: "You don't have any matches registered." });
  }

  askReturnMenu();
};

const askDeleteMatchById = async () => {
  const answer = await inquirer.prompt({
    name: "id",
    type: "input",
    message: "Enter match id:",
  });

  const spinner = createSpinner("Deleting your match...").start();
  await sleep();

  if (deleteMatchById(answer.id)) {
    spinner.success({ text: "Successfully deleted your match." });
  } else {
    spinner.error({ text: "Couldn't find a match with the id specified." });
  }

  askReturnMenu();
};

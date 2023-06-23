import inquirer from "inquirer"
import { createSpinner } from 'nanospinner'

import { Hero, HeroRole, getHeroesByRole } from "./models/Hero.ts";
import { getMapsByType, MapType, Map } from "./models/Map.ts";
import { Exceptions, Match, Result } from "./models/Match.ts";
import { addMatch, getNextMatchId } from "./utils/match.ts"

import { sleep } from "./utils/logger.ts";
import { askReturnMenu } from "./utils/prompt.ts";

let match: Match;

export const registerMatch = async () => {
  match.id = getNextMatchId()
  match.result = await askResult();
  match.mapType = await askMapType();
  match.map = await askMap();
  match.role = await askRole();
  match.heroesPlayed = await askHeroes();
  match.exceptions = await askExceptions();
  match.replayCode = await askReplayCode();
  match.party = await askParty();

  const confirm = await inquirer.prompt({
    name: 'answer',
    type: 'confirm',
    message: 'Do you want to save the match?'
  })

  const spinner = createSpinner(confirm.answer ? 'Registering your match' : 'Cancelling...').start()
  await sleep();

  if (!confirm.answer) return spinner.error({ text: `Cancelled the match register.` });

  if (addMatch(match)) {
    spinner.success({ text: `Succesfully registered your match.` })
  } else {
    spinner.error({ text: `Something went wrong while adding your match.` });
  }

  await sleep();
  askReturnMenu();
}

const askResult = async (): Promise<Result> => {
  const answer = await inquirer.prompt({
    name: 'result',
    type: 'list',
    message: 'What was the match result',
    choices: [
      'Win',
      'Loss',
      'Draw'
    ]
  });

  return answer.result;
}

const askMapType = async (): Promise<MapType> => {
  const answer = await inquirer.prompt({
    name: 'mapType',
    type: 'list',
    message: 'What was the map type',
    choices: [
      'Control',
      'Escort',
      'Hybrid',
      'Push'
    ]
  });

  return answer.mapType;
}

const askMap = async (): Promise<Map> => {
  let maps = getMapsByType(match.mapType ? match.mapType : "Push");

  const answer = await inquirer.prompt({
    name: 'map',
    type: 'list',
    message: 'What map did you play',
    choices: [...maps]
  });

  return answer.map;
}

const askRole = async (): Promise<HeroRole> => {
  const answer = await inquirer.prompt({
    name: 'role',
    type: 'list',
    message: 'What role did you play',
    choices: [
      'Tank',
      'Damage',
      'Support'
    ]
  });

  return answer.role;
}

const askHeroes = async (): Promise<Hero[]> => {
  let heroes: Hero[] = getHeroesByRole(match.role ? match.role : "Tank");

  const answer = await inquirer.prompt({
    name: 'heroes',
    type: 'checkbox',
    message: 'What heroes did you play',
    choices: [...heroes]
  });

  return answer.heroes;
}

const askExceptions = async (): Promise<Exceptions> => {
  const answer = await inquirer.prompt({
    name: 'exceptions',
    type: 'checkbox',
    message: 'Any match exceptions',
    choices: [
      "Leaver on my team",
      "Thrower on my team",
      "Leaver on the enemy team",
      "Thrower on the enemy team"
    ]
  });

  let exceptions = {
    team: {
      leaver: false,
      thrower: false
    },
    enemy: {
      leaver: false,
      thrower: false
    }
  }

  answer.exceptions.forEach((exception: string) => {
    if (exceptions == undefined) return;

    if (exception === "Leaver on my team") exceptions.team.leaver = true;
    if (exception === "Thrower on my team") exceptions.team.thrower = true;
    if (exception === "Leaver on the enemy team") exceptions.enemy.leaver = true;
    if (exception === "Thrower on the enemy team") exceptions.enemy.thrower = true;
  })

  return exceptions;
}

const askReplayCode = async (): Promise<string> => {
  const answer = await inquirer.prompt({
    name: 'replay',
    type: 'input',
    validate: validateReplayCode,
    message: 'Replay Code (enter code or leave it empty)'
  });

  return answer.replay;
}

const validateReplayCode = async (input: string) => {
  if (input.length === 6 || input.length === 0) return true;
  return false;
}

const askParty = async (): Promise<string[]> => {
  const answer = await inquirer.prompt({
    name: 'party',
    type: 'input',
    message: 'Party members (Separate by commas, maximum 4 members)'
  });

  if (answer.party == "") return [];

  return answer.party.split(",");
}

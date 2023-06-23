import Table from "cli-table3";
import inquirer from "inquirer";

import { getStats } from "./utils/stats.ts";
import { Stats } from "./models/Stats.ts"
import { log } from "./utils/logger.ts"
import { init } from "./index.ts";
import { askReturnMenu } from "./utils/prompt.ts";

let stats: Stats;

export const overallStats = async () => {
  stats = getStats();

  let winrate = parseInt(Number((stats.wins * 100) / (stats.wins + stats.losses)).toFixed(2));

  log(`Overall Stats: 
Wins: ${stats.wins}
Losses: ${stats.losses}
Draws: ${stats.draws}
Win rate: ${winrate}%`)

  const answer = await inquirer.prompt({
    name: 'menu',
    type: 'list',
    message: 'Please select any of the options below',
    choices: [
      'Role Leaderboard',
      'Hero Leaderboard',
      'Map Leaderboard',
      'Return to menu'
    ],
  });

  handleMenu(answer.menu)
}

const handleMenu = (answer: string) => {
  answer = answer.replaceAll(" ", "_").toLowerCase();

  if (answer === "role_leaderboard") return showRoleLeaderboard();
  if (answer === "hero_leaderboard") return showHeroLeaderboard();
  if (answer === "map_leaderboard") return showMapLeaderboard();
  if (answer === "return_to_menu") return init();
}

const showMapLeaderboard = () => {
  const table = new Table({
    head: ["Winrate", "Map Name", "Wins", "Losses", "Draw"]
  });

  stats.mapLeaderboard.forEach((map) => {
    table.push([map.getWinrate() + "%", map.name, map.wins, map.losses, map.draws])
  })

  console.log(table.toString());

  askReturnMenu();
}

const showRoleLeaderboard = () => {
  const table = new Table({
    head: ["Winrate", "Role Name", "Wins", "Losses", "Draw"]
  });

  stats.roleLeaderboard.forEach((role) => {
    table.push([role.getWinrate() + "%", role.name, role.wins, role.losses, role.draws])
  })

  console.log(table.toString());

  askReturnMenu();
}

const showHeroLeaderboard = () => {
  const table = new Table({
    head: ["Winrate", "Hero Name", "Wins", "Losses", "Draw"]
  });

  stats.heroLeaderboard.forEach((hero) => {
    table.push([hero.getWinrate() + "%", hero.name, hero.wins, hero.losses, hero.draws])
  })

  console.log(table.toString());

  askReturnMenu();
}

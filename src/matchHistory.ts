import Table from "cli-table3";

import { readData } from "./utils/storage.ts";
import { askReturnMenu } from "./utils/prompt.ts";
import { Match } from "./models/Match.ts";

export const matchHistory = async () => {
  try {
    const data = readData();
    const matches = data.matches;

    const table = new Table({
      head: ["Id", "Map", "Role", "Heroes", "Replay Code", "Result"],
    });

    matches.forEach((match: Match) => {
      let heroesText = "";

      match.heroesPlayed.forEach((hero: string, index: number) => {
        index === match.heroesPlayed.length - 1
          ? (heroesText += hero)
          : (heroesText += hero + ", ");
      });

      table.push([
        match.id,
        match.map,
        match.role,
        heroesText,
        match.replayCode,
        match.result,
      ]);
    });

    console.log(table.toString());

    askReturnMenu();
  } catch (err) {
    console.error(err);
  }
};

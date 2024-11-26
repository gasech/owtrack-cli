import Table from "cli-table3";

import { askReturnMenu } from "./utils/prompt.ts";
import { getMatches } from "./api/match.ts";
import { Match } from "./models/Match.ts";

export const matchHistory = async () => {
  try {
    const matches = await getMatches();

    const table = new Table({
      head: ["Id", "Result", "Map", "Role", "Heroes", "Replay Code"],
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
        match.result,
        match.map,
        match.role,
        heroesText,
        match.replayCode,
      ]);
    });

    console.log(table.toString());

    askReturnMenu();
  } catch (err) {
    console.error(err);
  }
};

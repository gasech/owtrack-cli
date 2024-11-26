import { Match } from "../models/Match";
import { getData, appendData, updateData, deleteData } from "../api/google.ts";

export const getMatches = async (): Promise<Match[]> => {
  try {
    const matchesData = await getData();

    if (!matchesData) return [];

    const matches: Match[] = matchesData.map(match => {
      return {
        id: match[0],
        result: match[1],
        mapType: match[2],
        map: match[3],
        role: match[4],
        heroesPlayed: match[5].split(","),
        exceptions: {
          team: {
            leaver: false,
            thrower: false,
          },
          enemy: {
            leaver: false,
            thrower: false,
          },
        },
        replayCode: match[6],
        party: match[7].split(","),
      };
    });

    return matches;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const addMatch = async (match: Match): Promise<boolean> => {
  try {
    await appendData(match);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const deleteMatchById = async (id: string): Promise<boolean> => {
  try {
    const matches = await getMatches();

    const filteredMatches = matches.filter((match: Match) => {
      return match.id != id;
    });

    if (filteredMatches.length == 0) return false;

    await updateData(filteredMatches);

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const deleteAllMatches = async (): Promise<boolean> => {
  try {
    await deleteData();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

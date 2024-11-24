import {
  addMatch,
  deleteMatchById,
  deleteAllMatches,
  getNextMatchId,
} from "./match";
import { Match } from "../models/Match";

describe("addMatch function", () => {
  test("should add a match and return true", () => {
    const match: Match = {
      id: 0,
      result: "Win",
      mapType: "Control",
      map: "Busan",
      role: "Tank",
      heroesPlayed: ["D.Va", "Zarya"],
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
      party: ["Player 1", "Player 2"],
      replayCode: "ABCD1234",
    };

    const result = addMatch(match);

    expect(result).toBe(true);
  });
});

describe("deleteMatchById function", () => {
  test("should delete a match and return true", () => {
    const id = 0;

    const result = deleteMatchById(id);

    expect(result).toBe(true);
  });

  test("shouldn't delete a match and return false", () => {
    const id = 31298319834391;

    const result = deleteMatchById(id);

    expect(result).toBe(false);
  });
});

describe("deleteAllMatches function", () => {
  test("should delete all matches and return true", () => {
    const result = deleteAllMatches();

    expect(result).toBe(true);
  });
});

describe("getNextMatchId function", () => {
  test("should return next match id which is 0", () => {
    const result = getNextMatchId();

    expect(result).toBe(0);
  });
});

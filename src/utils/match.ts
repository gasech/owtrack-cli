import { Match } from "../models/Match";
import { readData, saveData, storagePath } from "./storage";
import fs from "fs";

export const addMatch = (match: Match): boolean => {
	try {
		const data = readData();
		const matches = [...data.matches, match];
		saveData(matches);
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

export const deleteMatchById = (id: number): boolean => {
	try {
		const data = readData();
		let foundMatch = false;

		const matches = data.matches.filter((match: Match) => {
			if (match.id == id) {
				foundMatch = true;
			}

			return match.id != id;
		});

		saveData(matches);

		return foundMatch;
	} catch (err) {
		console.error(err);
		return false;
	}
};

export const deleteAllMatches = (): boolean => {
	try {
		fs.rmSync(storagePath, { recursive: true, force: true });
		return true;
	} catch (err) {
		return false;
	}
};

export const getNextMatchId = (): number => {
	try {
		const data = readData();
		const matches = data.matches;

		if (matches[matches.length - 1]) return matches[matches.length - 1].id + 1;

		return 0;
	} catch (err) {
		console.error(err);
		return 0;
	}
};

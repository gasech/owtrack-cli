import { Match } from "../models/Match";
import { HeroScore, MapScore, RoleScore, Stats } from "../models/Stats";
import { readData } from "./storage";

export const getStats = (): Stats => {
	const data = readData();
	const matches = data.matches;
	const record = {
		wins: 0,
		losses: 0,
		draws: 0
	};

	matches.forEach((match: Match) => {
		if (match.result === "Win") record.wins++;
		if (match.result === "Loss") record.losses++;
		if (match.result === "Draw") record.draws++;
	});

	return {
		wins: record.wins,
		losses: record.losses,
		draws: record.draws,
		mapLeaderboard: getMapLeaderboard(matches),
		roleLeaderboard: getRoleLeaderboard(matches),
		heroLeaderboard: getHeroLeaderboard(matches)
	};
};

const getMapLeaderboard = (matches: Match[]): MapScore[] => {
	const mapLeaderboard: MapScore[] = [];

	matches.forEach((match: Match) => {
		const findMatch = mapLeaderboard.find(m => m.name == match.map);

		if (!findMatch) {
			mapLeaderboard.push({
				name: match.map ? match.map : "Busan",
				wins: match.result === "Win" ? 1 : 0,
				losses: match.result === "Loss" ? 1 : 0,
				draws: match.result === "Draw" ? 1 : 0,
				getWinrate: function() { return parseInt(Number((this.wins * 100) / (this.wins + this.losses)).toFixed(2)); }
			});
		} else {
			if (match.result === "Win") findMatch.wins++;
			if (match.result === "Loss") findMatch.losses++;
			if (match.result === "Draw") findMatch.draws++;
		}
	});

	const sortedMapLeaderboard = mapLeaderboard.sort((a: MapScore, b: MapScore) => {
		return b.getWinrate() - a.getWinrate();
	});

	return sortedMapLeaderboard;
};

const getRoleLeaderboard = (matches: Match[]): RoleScore[] => {
	const roleLeaderboard: RoleScore[] = [];

	matches.forEach((match: Match) => {
		const findMatch = roleLeaderboard.find(m => m.name == match.role);

		if (!findMatch) {
			roleLeaderboard.push({
				name: match.role ? match.role : "Tank",
				wins: match.result === "Win" ? 1 : 0,
				losses: match.result === "Loss" ? 1 : 0,
				draws: match.result === "Draw" ? 1 : 0,
				getWinrate: function() { return parseInt(Number((this.wins * 100) / (this.wins + this.losses)).toFixed(2)); }
			});
		} else {
			if (match.result === "Win") findMatch.wins++;
			if (match.result === "Loss") findMatch.losses++;
			if (match.result === "Draw") findMatch.draws++;
		}
	});

	const sortedRoleLeaderboard = roleLeaderboard.sort((a: RoleScore, b: RoleScore) => {
		return b.getWinrate() - a.getWinrate();
	});

	return sortedRoleLeaderboard;
};

const getHeroLeaderboard = (matches: Match[]): HeroScore[] => {
	const heroLeaderboard: HeroScore[] = [];

	matches.forEach((match: Match) => {
		match.heroesPlayed?.forEach((hero) => {
			const findMatch = heroLeaderboard.find(m => m.name == hero);

			if (!findMatch) {
				heroLeaderboard.push({
					name: hero,
					wins: match.result === "Win" ? 1 : 0,
					losses: match.result === "Loss" ? 1 : 0,
					draws: match.result === "Draw" ? 1 : 0,
					getWinrate: function() { return parseInt(Number((this.wins * 100) / (this.wins + this.losses)).toFixed(2)); }
				});
			} else {
				if (match.result === "Win") findMatch.wins++;
				if (match.result === "Loss") findMatch.losses++;
				if (match.result === "Draw") findMatch.draws++;
			}
		});
	});

	const sortedHeroLeaderboard = heroLeaderboard.sort((a: HeroScore, b: HeroScore) => {
		return b.getWinrate() - a.getWinrate();
	});

	return sortedHeroLeaderboard;
};

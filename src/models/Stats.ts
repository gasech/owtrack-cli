import { Hero, HeroRole } from "./Hero";
import { Map } from "./Map";

export interface Stats {
  wins: number,
  losses: number,
  draws: number,
  mapLeaderboard: MapScore[],
  heroLeaderboard: HeroScore[],
  roleLeaderboard: RoleScore[]
}

export interface MapScore {
  name: Map,
  wins: number,
  losses: number,
  draws: number,
  getWinrate: () => number
}

export interface HeroScore {
  name: Hero,
  wins: number,
  losses: number,
  draws: number,
  getWinrate: () => number
}

export interface RoleScore {
  name: HeroRole,
  wins: number,
  losses: number,
  draws: number,
  getWinrate: () => number
}

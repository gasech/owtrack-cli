import { Map, MapType } from "./Map";
import { Hero, HeroRole } from "./Hero";

export type Result = "Win" | "Loss" | "Draw";

export interface Exceptions {
  team: {
    leaver: boolean;
    thrower: boolean;
  };
  enemy: {
    leaver: boolean;
    thrower: boolean;
  };
}

export interface Match {
  id: string;
  result: Result;
  mapType: MapType;
  map: Map;
  role: HeroRole;
  heroesPlayed: Hero[];
  exceptions: Exceptions;
  replayCode: string;
  party: string[];
}

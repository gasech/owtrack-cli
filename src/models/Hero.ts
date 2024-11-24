export type HeroRole = "Tank" | "Damage" | "Support";

export const HeroRoles: HeroRole[] = ["Tank", "Damage", "Support"];

export type Hero =
  | "Ana"
  | "Ashe"
  | "Baptiste"
  | "Bastion"
  | "Brigitte"
  | "Cassidy"
  | "D.Va"
  | "Doomfist"
  | "Echo"
  | "Genji"
  | "Hanzo"
  | "Illari"
  | "Junker Queen"
  | "Junkrat"
  | "Juno"
  | "Kiriko"
  | "Lifeweaver"
  | "Lúcio"
  | "Mauga"
  | "Mei"
  | "Mercy"
  | "Moira"
  | "Orisa"
  | "Pharah"
  | "Ramattra"
  | "Reaper"
  | "Reinhardt"
  | "Roadhog"
  | "Sigma"
  | "Sojourn"
  | "Soldier: 76"
  | "Sombra"
  | "Symmetra"
  | "Torbjörn"
  | "Tracer"
  | "Venture"
  | "Widowmaker"
  | "Winston"
  | "Wrecking Ball"
  | "Zarya"
  | "Zenyatta";

export const TankHeroes: Hero[] = [
  "D.Va",
  "Doomfist",
  "Junker Queen",
  "Mauga",
  "Orisa",
  "Ramattra",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Winston",
  "Wrecking Ball",
  "Zarya",
];

export const DamageHeroes: Hero[] = [
  "Ashe",
  "Bastion",
  "Cassidy",
  "Echo",
  "Genji",
  "Hanzo",
  "Junkrat",
  "Mei",
  "Pharah",
  "Reaper",
  "Sojourn",
  "Soldier: 76",
  "Sombra",
  "Symmetra",
  "Torbjörn",
  "Tracer",
  "Venture",
  "Widowmaker",
];

export const SupportHeroes: Hero[] = [
  "Ana",
  "Baptiste",
  "Brigitte",
  "Illari",
  "Juno",
  "Kiriko",
  "Lifeweaver",
  "Lúcio",
  "Mercy",
  "Moira",
  "Zenyatta",
];

export const Heroes: Hero[] = [
  ...TankHeroes,
  ...DamageHeroes,
  ...SupportHeroes,
];

export const getHeroesByRole = (role: HeroRole): Hero[] => {
  if (role == "Tank") return TankHeroes;
  if (role == "Damage") return DamageHeroes;
  if (role == "Support") return SupportHeroes;

  return [];
};

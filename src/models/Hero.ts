export type HeroRole = "Tank" | "Damage" | "Support"

export const HeroRoles: HeroRole[] = [
  "Tank",
  "Damage",
  "Support"
]

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
  | "Junker Queen"
  | "Junkrat"
  | "Kiriko"
  | "Lifeweaver"
  | "Lúcio"
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
  | "Widowmaker"
  | "Winston"
  | "Wrecking Ball"
  | "Zarya"
  | "Zenyatta";

export const Heroes: Hero[] = [
  "Ana",
  "Ashe",
  "Baptiste",
  "Bastion",
  "Brigitte",
  "Cassidy",
  "D.Va",
  "Doomfist",
  "Echo",
  "Genji",
  "Hanzo",
  "Junker Queen",
  "Junkrat",
  "Kiriko",
  "Lifeweaver",
  "Lúcio",
  "Mei",
  "Mercy",
  "Moira",
  "Orisa",
  "Pharah",
  "Ramattra",
  "Reaper",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Sojourn",
  "Soldier: 76",
  "Sombra",
  "Symmetra",
  "Torbjörn",
  "Tracer",
  "Widowmaker",
  "Winston",
  "Wrecking Ball",
  "Zarya",
  "Zenyatta"
];

export const TankHeroes: Hero[] = [
  "D.Va",
  "Doomfist",
  "Junker Queen",
  "Orisa",
  "Ramattra",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Winston",
  "Wrecking Ball",
  "Zarya"
]

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
  "Widowmaker"
]

export const SupportHeroes: Hero[] = [
  "Ana",
  "Baptiste",
  "Brigitte",
  "Kiriko",
  "Lifeweaver",
  "Lúcio",
  "Mercy",
  "Moira",
  "Zenyatta"
]

export const getHeroesByRole = (role: HeroRole): Hero[] => {
  if (role == "Tank") return TankHeroes;
  if (role == "Damage") return DamageHeroes;
  if (role == "Support") return SupportHeroes;

  return [];
}

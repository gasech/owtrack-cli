export type MapType = "Escort" | "Control" | "Hybrid" | "Push";

export type ControlMap =
  | "Antarctic Peninsula"
  | "Busan"
  | "Ilios"
  | "Lijiang Tower"
  | "Nepal"
  | "Oasis";

export const ControlMaps: ControlMap[] = [
  "Antarctic Peninsula",
  "Busan",
  "Ilios",
  "Lijiang Tower",
  "Nepal",
  "Oasis"
];

export type EscortMap =
  | "Circuit Royale"
  | "Dorado"
  | "Havana"
  | "Junkertown"
  | "Rialto"
  | "Route 66"
  | "Watchpoint: Gibraltar"
  | "Shambali Monastery";

export const EscortMaps: EscortMap[] = [
  "Circuit Royale",
  "Dorado",
  "Havana",
  "Junkertown",
  "Rialto",
  "Route 66",
  "Watchpoint: Gibraltar",
  "Shambali Monastery"
];

export type HybridMap =
  | "Blizzard World"
  | "Eichenwalde"
  | "Hollywood"
  | "King's Row"
  | "Numbani"
  | "Midtown"
  | "Paraíso";

export const HybridMaps: HybridMap[] = [
  "Blizzard World",
  "Eichenwalde",
  "Hollywood",
  "King's Row",
  "Numbani",
  "Midtown",
  "Paraíso"
];

export type PushMap =
  | "Colosseo"
  | "Esperança"
  | "New Queen Street";

export const PushMaps: PushMap[] = [
  "Colosseo",
  "Esperança",
  "New Queen Street"
];

export type Map = ControlMap | EscortMap | HybridMap | PushMap;

export const getMapsByType = (mapType: MapType) => {
  if (mapType === "Control") return ControlMaps;
  if (mapType === "Escort") return EscortMaps;
  if (mapType === "Hybrid") return HybridMaps;
  if (mapType === "Push") return PushMaps;

  return []
}

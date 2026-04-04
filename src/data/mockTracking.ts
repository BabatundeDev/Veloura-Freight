export type ShipmentStage =
  | "received"
  | "customs"
  | "transit"
  | "delivered";

export interface TrackingResult {
  id: string;
  currentStage: ShipmentStage;
  stages: {
    key: ShipmentStage;
    label: string;
    completed: boolean;
    timestamp?: string;
  }[];
}

const stageOrder: ShipmentStage[] = [
  "received",
  "customs",
  "transit",
  "delivered",
];

const mockById: Record<string, ShipmentStage> = {
  PF2026001: "transit",
  PF2026002: "customs",
  PF2026003: "delivered",
  PF2026004: "received",
};

function buildStages(current: ShipmentStage): TrackingResult["stages"] {
  const idx = stageOrder.indexOf(current);
  const labels: Record<ShipmentStage, string> = {
    received: "Received",
    customs: "Customs Clearance",
    transit: "In Transit",
    delivered: "Delivered",
  };
  const timestamps: Partial<Record<ShipmentStage, string>> = {
    received: "Apr 1, 2026 — 09:12 UTC",
    customs: "Apr 1, 2026 — 18:40 UTC",
    transit: "Apr 2, 2026 — 06:05 UTC",
    delivered: "Apr 3, 2026 — 14:22 UTC",
  };

  return stageOrder.map((key, i) => ({
    key,
    label: labels[key],
    completed: i <= idx,
    timestamp: i <= idx ? timestamps[key] : undefined,
  }));
}

export function getTrackingMock(id: string): TrackingResult | null {
  const trimmed = id.trim().toUpperCase().replace(/\s/g, "");
  if (trimmed.length < 3) return null;

  const stage = mockById[trimmed] ?? "transit";

  return {
    id: trimmed,
    currentStage: stage,
    stages: buildStages(stage),
  };
}

const STORAGE_KEY = "primefreight_tracking_overrides";

export function getStoredOverride(id: string): ShipmentStage | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const map = JSON.parse(raw) as Record<string, ShipmentStage>;
    return map[id.toUpperCase()] ?? null;
  } catch {
    return null;
  }
}

export function setStoredOverride(id: string, stage: ShipmentStage): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const map = raw ? (JSON.parse(raw) as Record<string, ShipmentStage>) : {};
    map[id.toUpperCase()] = stage;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function resolveTracking(id: string): TrackingResult | null {
  const trimmed = id.trim().toUpperCase().replace(/\s/g, "");
  if (!trimmed) return null;

  const override = getStoredOverride(trimmed);
  const base = getTrackingMock(trimmed);
  if (override) {
    return {
      id: trimmed,
      currentStage: override,
      stages: buildStages(override),
    };
  }
  return base;
}

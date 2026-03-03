// India variant — Bharat Monitor
// Focused on India geopolitics, war impact, markets, and leader statements
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Shared exports
export * from '../feeds';
export * from '../geo';
export * from '../military';
export * from '../entities';

// Panel configuration for India-focused view
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'India Region Map', enabled: true, priority: 1 },
  'live-news': { name: 'India Live News', enabled: true, priority: 1 },
  'live-webcams': { name: 'Live Cameras', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  india: { name: 'India News', enabled: true, priority: 1 },
  leaders: { name: 'Indian Leaders', enabled: true, priority: 1 },
  warimpact: { name: 'War Impact on India', enabled: true, priority: 1 },
  indiabiz: { name: 'India Markets', enabled: true, priority: 1 },
  diplomacy: { name: 'India Diplomacy', enabled: true, priority: 1 },
  indiadefense: { name: 'India Defence', enabled: true, priority: 1 },
  worldindia: { name: 'World & India', enabled: true, priority: 1 },
  markets: { name: 'Global Markets', enabled: true, priority: 1 },
  commodities: { name: 'Oil & Gold Prices', enabled: true, priority: 1 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 2 },
  'strategic-risk': { name: 'Strategic Risk', enabled: true, priority: 2 },
  cii: { name: 'Country Instability', enabled: true, priority: 2 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 2 },
  polymarket: { name: 'Predictions', enabled: false, priority: 2 },
};

// Map layers for India-focused view — South Asia centered
export const DEFAULT_MAP_LAYERS: MapLayers = {
  iranAttacks: false,
  gpsJamming: false,
  conflicts: true,
  bases: true,
  cables: false,
  pipelines: true,
  hotspots: true,
  ais: false,
  nuclear: true,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: true,
  waterways: true,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: true,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  dayNight: false,
};

// Mobile defaults
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
  bases: false,
  pipelines: false,
  nuclear: false,
  military: false,
  waterways: false,
  economic: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'india',
  description: 'India-focused intelligence dashboard — Bharat Monitor',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};

export const cache_warm_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1200, unauthorized: 1202, invalid: 1203 },
} as const;
export type cachewarmErrorCode = typeof cache_warm_CONFIG.errorCodes[keyof typeof cache_warm_CONFIG.errorCodes];

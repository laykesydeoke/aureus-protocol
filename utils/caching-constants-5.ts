export const caching_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 640, unauthorized: 642, invalid: 643 },
} as const;
export type cachingErrorCode = typeof caching_CONFIG.errorCodes[keyof typeof caching_CONFIG.errorCodes];

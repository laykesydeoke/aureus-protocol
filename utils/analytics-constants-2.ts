export const analytics_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 630, unauthorized: 632, invalid: 633 },
} as const;
export type analyticsErrorCode = typeof analytics_CONFIG.errorCodes[keyof typeof analytics_CONFIG.errorCodes];

export const rate_limit_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 610, unauthorized: 612, invalid: 613 },
} as const;
export type ratelimitErrorCode = typeof rate_limit_CONFIG.errorCodes[keyof typeof rate_limit_CONFIG.errorCodes];

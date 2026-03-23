export const failover_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 790, unauthorized: 792, invalid: 793 },
} as const;
export type failoverErrorCode = typeof failover_CONFIG.errorCodes[keyof typeof failover_CONFIG.errorCodes];

export const latency_mon_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1040, unauthorized: 1042, invalid: 1043 },
} as const;
export type latencymonErrorCode = typeof latency_mon_CONFIG.errorCodes[keyof typeof latency_mon_CONFIG.errorCodes];

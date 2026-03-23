export const seed_data_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1110, unauthorized: 1112, invalid: 1113 },
} as const;
export type seeddataErrorCode = typeof seed_data_CONFIG.errorCodes[keyof typeof seed_data_CONFIG.errorCodes];

export const data_valid_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 730, unauthorized: 732, invalid: 733 },
} as const;
export type datavalidErrorCode = typeof data_valid_CONFIG.errorCodes[keyof typeof data_valid_CONFIG.errorCodes];

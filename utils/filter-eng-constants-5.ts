export const filter_eng_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1280, unauthorized: 1282, invalid: 1283 },
} as const;
export type filterengErrorCode = typeof filter_eng_CONFIG.errorCodes[keyof typeof filter_eng_CONFIG.errorCodes];

export const lazy_load_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1230, unauthorized: 1232, invalid: 1233 },
} as const;
export type lazyloadErrorCode = typeof lazy_load_CONFIG.errorCodes[keyof typeof lazy_load_CONFIG.errorCodes];

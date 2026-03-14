export const search_idx_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 680, unauthorized: 682, invalid: 683 },
} as const;
export type searchidxErrorCode = typeof search_idx_CONFIG.errorCodes[keyof typeof search_idx_CONFIG.errorCodes];

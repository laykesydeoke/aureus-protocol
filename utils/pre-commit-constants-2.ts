export const pre_commit_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1310, unauthorized: 1312, invalid: 1313 },
} as const;
export type precommitErrorCode = typeof pre_commit_CONFIG.errorCodes[keyof typeof pre_commit_CONFIG.errorCodes];

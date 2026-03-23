export const validate_ci_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1340, unauthorized: 1342, invalid: 1343 },
} as const;
export type validateciErrorCode = typeof validate_ci_CONFIG.errorCodes[keyof typeof validate_ci_CONFIG.errorCodes];

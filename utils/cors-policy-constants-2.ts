export const cors_policy_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1460, unauthorized: 1462, invalid: 1463 },
} as const;
export type corspolicyErrorCode = typeof cors_policy_CONFIG.errorCodes[keyof typeof cors_policy_CONFIG.errorCodes];

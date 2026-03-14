export const batch_ops_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 620, unauthorized: 622, invalid: 623 },
} as const;
export type batchopsErrorCode = typeof batch_ops_CONFIG.errorCodes[keyof typeof batch_ops_CONFIG.errorCodes];

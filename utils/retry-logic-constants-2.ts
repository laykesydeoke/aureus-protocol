export const retry_logic_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 910, unauthorized: 912, invalid: 913 },
} as const;
export type retrylogicErrorCode = typeof retry_logic_CONFIG.errorCodes[keyof typeof retry_logic_CONFIG.errorCodes];

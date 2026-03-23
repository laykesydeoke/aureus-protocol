export const health_chk_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 770, unauthorized: 772, invalid: 773 },
} as const;
export type healthchkErrorCode = typeof health_chk_CONFIG.errorCodes[keyof typeof health_chk_CONFIG.errorCodes];

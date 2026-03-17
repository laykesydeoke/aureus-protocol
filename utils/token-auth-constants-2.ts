export const token_auth_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 960, unauthorized: 962, invalid: 963 },
} as const;
export type tokenauthErrorCode = typeof token_auth_CONFIG.errorCodes[keyof typeof token_auth_CONFIG.errorCodes];

export const csrf_token_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1490, unauthorized: 1492, invalid: 1493 },
} as const;
export type csrftokenErrorCode = typeof csrf_token_CONFIG.errorCodes[keyof typeof csrf_token_CONFIG.errorCodes];

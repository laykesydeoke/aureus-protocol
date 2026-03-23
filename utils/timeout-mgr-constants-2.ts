export const timeout_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 930, unauthorized: 932, invalid: 933 },
} as const;
export type timeoutmgrErrorCode = typeof timeout_mgr_CONFIG.errorCodes[keyof typeof timeout_mgr_CONFIG.errorCodes];

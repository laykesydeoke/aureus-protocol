export const session_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 950, unauthorized: 952, invalid: 953 },
} as const;
export type sessionmgrErrorCode = typeof session_mgr_CONFIG.errorCodes[keyof typeof session_mgr_CONFIG.errorCodes];

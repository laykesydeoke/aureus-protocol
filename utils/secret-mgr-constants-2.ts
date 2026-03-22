export const secret_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1410, unauthorized: 1412, invalid: 1413 },
} as const;
export type secretmgrErrorCode = typeof secret_mgr_CONFIG.errorCodes[keyof typeof secret_mgr_CONFIG.errorCodes];

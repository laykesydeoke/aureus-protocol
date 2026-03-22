export const cert_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1440, unauthorized: 1442, invalid: 1443 },
} as const;
export type certmgrErrorCode = typeof cert_mgr_CONFIG.errorCodes[keyof typeof cert_mgr_CONFIG.errorCodes];

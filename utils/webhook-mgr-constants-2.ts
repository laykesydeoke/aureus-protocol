export const webhook_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 750, unauthorized: 752, invalid: 753 },
} as const;
export type webhookmgrErrorCode = typeof webhook_mgr_CONFIG.errorCodes[keyof typeof webhook_mgr_CONFIG.errorCodes];

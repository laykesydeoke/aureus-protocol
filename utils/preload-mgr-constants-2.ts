export const preload_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1220, unauthorized: 1222, invalid: 1223 },
} as const;
export type preloadmgrErrorCode = typeof preload_mgr_CONFIG.errorCodes[keyof typeof preload_mgr_CONFIG.errorCodes];

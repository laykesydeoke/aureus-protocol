export const plan_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 810, unauthorized: 812, invalid: 813 },
} as const;
export type planmgrErrorCode = typeof plan_mgr_CONFIG.errorCodes[keyof typeof plan_mgr_CONFIG.errorCodes];

export const rollover_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 830, unauthorized: 832, invalid: 833 },
} as const;
export type rollovermgrErrorCode = typeof rollover_mgr_CONFIG.errorCodes[keyof typeof rollover_mgr_CONFIG.errorCodes];

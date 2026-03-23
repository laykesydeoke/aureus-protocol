export const snapshot_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1140, unauthorized: 1142, invalid: 1143 },
} as const;
export type snapshotmgrErrorCode = typeof snapshot_mgr_CONFIG.errorCodes[keyof typeof snapshot_mgr_CONFIG.errorCodes];

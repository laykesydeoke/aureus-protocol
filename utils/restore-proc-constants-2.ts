export const restore_proc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1130, unauthorized: 1132, invalid: 1133 },
} as const;
export type restoreprocErrorCode = typeof restore_proc_CONFIG.errorCodes[keyof typeof restore_proc_CONFIG.errorCodes];

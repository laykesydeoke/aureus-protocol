export const queue_sys_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 740, unauthorized: 742, invalid: 743 },
} as const;
export type queuesysErrorCode = typeof queue_sys_CONFIG.errorCodes[keyof typeof queue_sys_CONFIG.errorCodes];

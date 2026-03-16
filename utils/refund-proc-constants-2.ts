export const refund_proc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 880, unauthorized: 882, invalid: 883 },
} as const;
export type refundprocErrorCode = typeof refund_proc_CONFIG.errorCodes[keyof typeof refund_proc_CONFIG.errorCodes];

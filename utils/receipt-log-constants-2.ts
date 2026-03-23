export const receipt_log_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 870, unauthorized: 872, invalid: 873 },
} as const;
export type receiptlogErrorCode = typeof receipt_log_CONFIG.errorCodes[keyof typeof receipt_log_CONFIG.errorCodes];

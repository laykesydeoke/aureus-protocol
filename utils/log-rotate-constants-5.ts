export const log_rotate_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1000, unauthorized: 1002, invalid: 1003 },
} as const;
export type logrotateErrorCode = typeof log_rotate_CONFIG.errorCodes[keyof typeof log_rotate_CONFIG.errorCodes];

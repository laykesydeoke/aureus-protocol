export const stream_proc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1250, unauthorized: 1252, invalid: 1253 },
} as const;
export type streamprocErrorCode = typeof stream_proc_CONFIG.errorCodes[keyof typeof stream_proc_CONFIG.errorCodes];

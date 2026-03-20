export const map_reduce_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1290, unauthorized: 1292, invalid: 1293 },
} as const;
export type mapreduceErrorCode = typeof map_reduce_CONFIG.errorCodes[keyof typeof map_reduce_CONFIG.errorCodes];

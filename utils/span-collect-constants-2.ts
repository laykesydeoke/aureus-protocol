export const span_collect_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1030, unauthorized: 1032, invalid: 1033 },
} as const;
export type spancollectErrorCode = typeof span_collect_CONFIG.errorCodes[keyof typeof span_collect_CONFIG.errorCodes];

export const number_fmt_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1560, unauthorized: 1562, invalid: 1563 },
} as const;
export type numberfmtErrorCode = typeof number_fmt_CONFIG.errorCodes[keyof typeof number_fmt_CONFIG.errorCodes];

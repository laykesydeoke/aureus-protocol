export const currency_fmt_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1550, unauthorized: 1552, invalid: 1553 },
} as const;
export type currencyfmtErrorCode = typeof currency_fmt_CONFIG.errorCodes[keyof typeof currency_fmt_CONFIG.errorCodes];

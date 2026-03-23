export const locale_fmt_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1530, unauthorized: 1532, invalid: 1533 },
} as const;
export type localefmtErrorCode = typeof locale_fmt_CONFIG.errorCodes[keyof typeof locale_fmt_CONFIG.errorCodes];

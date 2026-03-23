export const date_parse_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1540, unauthorized: 1542, invalid: 1543 },
} as const;
export type dateparseErrorCode = typeof date_parse_CONFIG.errorCodes[keyof typeof date_parse_CONFIG.errorCodes];

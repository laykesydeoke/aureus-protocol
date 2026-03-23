export const text_sanitize_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1570, unauthorized: 1572, invalid: 1573 },
} as const;
export type textsanitizeErrorCode = typeof text_sanitize_CONFIG.errorCodes[keyof typeof text_sanitize_CONFIG.errorCodes];

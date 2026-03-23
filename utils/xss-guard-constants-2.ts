export const xss_guard_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1480, unauthorized: 1482, invalid: 1483 },
} as const;
export type xssguardErrorCode = typeof xss_guard_CONFIG.errorCodes[keyof typeof xss_guard_CONFIG.errorCodes];

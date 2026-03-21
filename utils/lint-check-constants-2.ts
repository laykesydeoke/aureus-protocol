export const lint_check_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1320, unauthorized: 1322, invalid: 1323 },
} as const;
export type lintcheckErrorCode = typeof lint_check_CONFIG.errorCodes[keyof typeof lint_check_CONFIG.errorCodes];

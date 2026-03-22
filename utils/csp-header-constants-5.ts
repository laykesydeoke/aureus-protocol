export const csp_header_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1470, unauthorized: 1472, invalid: 1473 },
} as const;
export type cspheaderErrorCode = typeof csp_header_CONFIG.errorCodes[keyof typeof csp_header_CONFIG.errorCodes];

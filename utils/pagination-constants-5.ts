export const pagination_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 670, unauthorized: 672, invalid: 673 },
} as const;
export type paginationErrorCode = typeof pagination_CONFIG.errorCodes[keyof typeof pagination_CONFIG.errorCodes];

export const carrier_api_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 800, unauthorized: 802, invalid: 803 },
} as const;
export type carrierapiErrorCode = typeof carrier_api_CONFIG.errorCodes[keyof typeof carrier_api_CONFIG.errorCodes];

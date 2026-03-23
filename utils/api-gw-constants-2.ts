export const api_gw_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 760, unauthorized: 762, invalid: 763 },
} as const;
export type apigwErrorCode = typeof api_gw_CONFIG.errorCodes[keyof typeof api_gw_CONFIG.errorCodes];

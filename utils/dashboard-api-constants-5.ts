export const dashboard_api_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1070, unauthorized: 1072, invalid: 1073 },
} as const;
export type dashboardapiErrorCode = typeof dashboard_api_CONFIG.errorCodes[keyof typeof dashboard_api_CONFIG.errorCodes];

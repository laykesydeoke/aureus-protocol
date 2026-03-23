export const pool_conn_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 940, unauthorized: 942, invalid: 943 },
} as const;
export type poolconnErrorCode = typeof pool_conn_CONFIG.errorCodes[keyof typeof pool_conn_CONFIG.errorCodes];

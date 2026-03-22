export const kms_proxy_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1430, unauthorized: 1432, invalid: 1433 },
} as const;
export type kmsproxyErrorCode = typeof kms_proxy_CONFIG.errorCodes[keyof typeof kms_proxy_CONFIG.errorCodes];

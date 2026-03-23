export const tls_config_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1450, unauthorized: 1452, invalid: 1453 },
} as const;
export type tlsconfigErrorCode = typeof tls_config_CONFIG.errorCodes[keyof typeof tls_config_CONFIG.errorCodes];

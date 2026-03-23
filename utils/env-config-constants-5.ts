export const env_config_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1400, unauthorized: 1402, invalid: 1403 },
} as const;
export type envconfigErrorCode = typeof env_config_CONFIG.errorCodes[keyof typeof env_config_CONFIG.errorCodes];

export const cdn_config_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1390, unauthorized: 1392, invalid: 1393 },
} as const;
export type cdnconfigErrorCode = typeof cdn_config_CONFIG.errorCodes[keyof typeof cdn_config_CONFIG.errorCodes];

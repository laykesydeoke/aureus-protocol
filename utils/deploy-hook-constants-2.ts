export const deploy_hook_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1300, unauthorized: 1302, invalid: 1303 },
} as const;
export type deployhookErrorCode = typeof deploy_hook_CONFIG.errorCodes[keyof typeof deploy_hook_CONFIG.errorCodes];

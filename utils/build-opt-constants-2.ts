export const build_opt_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1360, unauthorized: 1362, invalid: 1363 },
} as const;
export type buildoptErrorCode = typeof build_opt_CONFIG.errorCodes[keyof typeof build_opt_CONFIG.errorCodes];

export const eager_fetch_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1240, unauthorized: 1242, invalid: 1243 },
} as const;
export type eagerfetchErrorCode = typeof eager_fetch_CONFIG.errorCodes[keyof typeof eager_fetch_CONFIG.errorCodes];

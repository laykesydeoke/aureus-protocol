export const load_bal_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 780, unauthorized: 782, invalid: 783 },
} as const;
export type loadbalErrorCode = typeof load_bal_CONFIG.errorCodes[keyof typeof load_bal_CONFIG.errorCodes];

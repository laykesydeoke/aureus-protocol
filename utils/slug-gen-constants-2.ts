export const slug_gen_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1580, unauthorized: 1582, invalid: 1583 },
} as const;
export type sluggenErrorCode = typeof slug_gen_CONFIG.errorCodes[keyof typeof slug_gen_CONFIG.errorCodes];

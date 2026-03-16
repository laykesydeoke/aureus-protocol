export const discount_calc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 850, unauthorized: 852, invalid: 853 },
} as const;
export type discountcalcErrorCode = typeof discount_calc_CONFIG.errorCodes[keyof typeof discount_calc_CONFIG.errorCodes];

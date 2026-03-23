export const promo_engine_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 840, unauthorized: 842, invalid: 843 },
} as const;
export type promoengineErrorCode = typeof promo_engine_CONFIG.errorCodes[keyof typeof promo_engine_CONFIG.errorCodes];

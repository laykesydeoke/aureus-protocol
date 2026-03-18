export const metric_agg_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1010, unauthorized: 1012, invalid: 1013 },
} as const;
export type metricaggErrorCode = typeof metric_agg_CONFIG.errorCodes[keyof typeof metric_agg_CONFIG.errorCodes];

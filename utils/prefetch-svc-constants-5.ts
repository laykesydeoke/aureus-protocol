export const prefetch_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1210, unauthorized: 1212, invalid: 1213 },
} as const;
export type prefetchsvcErrorCode = typeof prefetch_svc_CONFIG.errorCodes[keyof typeof prefetch_svc_CONFIG.errorCodes];

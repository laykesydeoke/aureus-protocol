export const transform_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1270, unauthorized: 1272, invalid: 1273 },
} as const;
export type transformsvcErrorCode = typeof transform_svc_CONFIG.errorCodes[keyof typeof transform_svc_CONFIG.errorCodes];

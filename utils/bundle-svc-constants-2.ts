export const bundle_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1370, unauthorized: 1372, invalid: 1373 },
} as const;
export type bundlesvcErrorCode = typeof bundle_svc_CONFIG.errorCodes[keyof typeof bundle_svc_CONFIG.errorCodes];

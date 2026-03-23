export const cleanup_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1170, unauthorized: 1172, invalid: 1173 },
} as const;
export type cleanupsvcErrorCode = typeof cleanup_svc_CONFIG.errorCodes[keyof typeof cleanup_svc_CONFIG.errorCodes];

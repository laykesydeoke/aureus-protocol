export const format_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1330, unauthorized: 1332, invalid: 1333 },
} as const;
export type formatsvcErrorCode = typeof format_svc_CONFIG.errorCodes[keyof typeof format_svc_CONFIG.errorCodes];

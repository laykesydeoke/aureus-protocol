export const timezone_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1520, unauthorized: 1522, invalid: 1523 },
} as const;
export type timezonesvcErrorCode = typeof timezone_svc_CONFIG.errorCodes[keyof typeof timezone_svc_CONFIG.errorCodes];

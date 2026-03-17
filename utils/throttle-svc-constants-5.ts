export const throttle_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 900, unauthorized: 902, invalid: 903 },
} as const;
export type throttlesvcErrorCode = typeof throttle_svc_CONFIG.errorCodes[keyof typeof throttle_svc_CONFIG.errorCodes];

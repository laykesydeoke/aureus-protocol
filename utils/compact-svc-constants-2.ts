export const compact_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1190, unauthorized: 1192, invalid: 1193 },
} as const;
export type compactsvcErrorCode = typeof compact_svc_CONFIG.errorCodes[keyof typeof compact_svc_CONFIG.errorCodes];

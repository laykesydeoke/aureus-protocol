export const archive_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1150, unauthorized: 1152, invalid: 1153 },
} as const;
export type archivesvcErrorCode = typeof archive_svc_CONFIG.errorCodes[keyof typeof archive_svc_CONFIG.errorCodes];

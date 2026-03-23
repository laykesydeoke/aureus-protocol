export const backup_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1120, unauthorized: 1122, invalid: 1123 },
} as const;
export type backupsvcErrorCode = typeof backup_svc_CONFIG.errorCodes[keyof typeof backup_svc_CONFIG.errorCodes];

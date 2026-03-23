export const export_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1090, unauthorized: 1092, invalid: 1093 },
} as const;
export type exportsvcErrorCode = typeof export_svc_CONFIG.errorCodes[keyof typeof export_svc_CONFIG.errorCodes];

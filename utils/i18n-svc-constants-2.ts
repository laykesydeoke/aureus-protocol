export const i18n_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1500, unauthorized: 1502, invalid: 1503 },
} as const;
export type i18nsvcErrorCode = typeof i18n_svc_CONFIG.errorCodes[keyof typeof i18n_svc_CONFIG.errorCodes];

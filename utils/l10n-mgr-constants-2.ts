export const l10n_mgr_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1510, unauthorized: 1512, invalid: 1513 },
} as const;
export type l10nmgrErrorCode = typeof l10n_mgr_CONFIG.errorCodes[keyof typeof l10n_mgr_CONFIG.errorCodes];

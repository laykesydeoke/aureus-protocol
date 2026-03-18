export const uptime_chk_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1050, unauthorized: 1052, invalid: 1053 },
} as const;
export type uptimechkErrorCode = typeof uptime_chk_CONFIG.errorCodes[keyof typeof uptime_chk_CONFIG.errorCodes];

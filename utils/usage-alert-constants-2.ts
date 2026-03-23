export const usage_alert_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 820, unauthorized: 822, invalid: 823 },
} as const;
export type usagealertErrorCode = typeof usage_alert_CONFIG.errorCodes[keyof typeof usage_alert_CONFIG.errorCodes];

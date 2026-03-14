export const event_sys_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 650, unauthorized: 652, invalid: 653 },
} as const;
export type eventsysErrorCode = typeof event_sys_CONFIG.errorCodes[keyof typeof event_sys_CONFIG.errorCodes];

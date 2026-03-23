export const notif_queue_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 690, unauthorized: 692, invalid: 693 },
} as const;
export type notifqueueErrorCode = typeof notif_queue_CONFIG.errorCodes[keyof typeof notif_queue_CONFIG.errorCodes];

export const error_handler_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 660, unauthorized: 662, invalid: 663 },
} as const;
export type errorhandlerErrorCode = typeof error_handler_CONFIG.errorCodes[keyof typeof error_handler_CONFIG.errorCodes];

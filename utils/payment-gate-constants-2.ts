export const payment_gate_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 890, unauthorized: 892, invalid: 893 },
} as const;
export type paymentgateErrorCode = typeof payment_gate_CONFIG.errorCodes[keyof typeof payment_gate_CONFIG.errorCodes];

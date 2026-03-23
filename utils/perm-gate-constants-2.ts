export const perm_gate_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 990, unauthorized: 992, invalid: 993 },
} as const;
export type permgateErrorCode = typeof perm_gate_CONFIG.errorCodes[keyof typeof perm_gate_CONFIG.errorCodes];

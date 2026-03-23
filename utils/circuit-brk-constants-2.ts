export const circuit_brk_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 920, unauthorized: 922, invalid: 923 },
} as const;
export type circuitbrkErrorCode = typeof circuit_brk_CONFIG.errorCodes[keyof typeof circuit_brk_CONFIG.errorCodes];

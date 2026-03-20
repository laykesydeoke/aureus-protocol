export const pipe_chain_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1260, unauthorized: 1262, invalid: 1263 },
} as const;
export type pipechainErrorCode = typeof pipe_chain_CONFIG.errorCodes[keyof typeof pipe_chain_CONFIG.errorCodes];

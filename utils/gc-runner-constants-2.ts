export const gc_runner_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1180, unauthorized: 1182, invalid: 1183 },
} as const;
export type gcrunnerErrorCode = typeof gc_runner_CONFIG.errorCodes[keyof typeof gc_runner_CONFIG.errorCodes];

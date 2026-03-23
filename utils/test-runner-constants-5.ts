export const test_runner_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1350, unauthorized: 1352, invalid: 1353 },
} as const;
export type testrunnerErrorCode = typeof test_runner_CONFIG.errorCodes[keyof typeof test_runner_CONFIG.errorCodes];

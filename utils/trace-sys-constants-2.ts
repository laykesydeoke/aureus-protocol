export const trace_sys_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1020, unauthorized: 1022, invalid: 1023 },
} as const;
export type tracesysErrorCode = typeof trace_sys_CONFIG.errorCodes[keyof typeof trace_sys_CONFIG.errorCodes];

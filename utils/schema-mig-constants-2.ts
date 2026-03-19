export const schema_mig_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1100, unauthorized: 1102, invalid: 1103 },
} as const;
export type schemamigErrorCode = typeof schema_mig_CONFIG.errorCodes[keyof typeof schema_mig_CONFIG.errorCodes];

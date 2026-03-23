export const compliance_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 710, unauthorized: 712, invalid: 713 },
} as const;
export type complianceErrorCode = typeof compliance_CONFIG.errorCodes[keyof typeof compliance_CONFIG.errorCodes];

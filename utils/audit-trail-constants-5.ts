export const audit_trail_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 700, unauthorized: 702, invalid: 703 },
} as const;
export type audittrailErrorCode = typeof audit_trail_CONFIG.errorCodes[keyof typeof audit_trail_CONFIG.errorCodes];

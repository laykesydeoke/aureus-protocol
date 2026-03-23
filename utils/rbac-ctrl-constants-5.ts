export const rbac_ctrl_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 970, unauthorized: 972, invalid: 973 },
} as const;
export type rbacctrlErrorCode = typeof rbac_ctrl_CONFIG.errorCodes[keyof typeof rbac_ctrl_CONFIG.errorCodes];

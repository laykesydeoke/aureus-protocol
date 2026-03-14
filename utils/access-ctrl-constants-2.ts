export const access_ctrl_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 600, unauthorized: 602, invalid: 603 },
} as const;
export type accessctrlErrorCode = typeof access_ctrl_CONFIG.errorCodes[keyof typeof access_ctrl_CONFIG.errorCodes];

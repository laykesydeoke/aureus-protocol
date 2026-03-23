export const encrypt_mod_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 720, unauthorized: 722, invalid: 723 },
} as const;
export type encryptmodErrorCode = typeof encrypt_mod_CONFIG.errorCodes[keyof typeof encrypt_mod_CONFIG.errorCodes];

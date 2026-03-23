export const vault_svc_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1420, unauthorized: 1422, invalid: 1423 },
} as const;
export type vaultsvcErrorCode = typeof vault_svc_CONFIG.errorCodes[keyof typeof vault_svc_CONFIG.errorCodes];

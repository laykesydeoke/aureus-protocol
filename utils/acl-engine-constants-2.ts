export const acl_engine_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 980, unauthorized: 982, invalid: 983 },
} as const;
export type aclengineErrorCode = typeof acl_engine_CONFIG.errorCodes[keyof typeof acl_engine_CONFIG.errorCodes];

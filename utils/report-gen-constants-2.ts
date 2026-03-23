export const report_gen_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1080, unauthorized: 1082, invalid: 1083 },
} as const;
export type reportgenErrorCode = typeof report_gen_CONFIG.errorCodes[keyof typeof report_gen_CONFIG.errorCodes];

export const invoice_gen_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 860, unauthorized: 862, invalid: 863 },
} as const;
export type invoicegenErrorCode = typeof invoice_gen_CONFIG.errorCodes[keyof typeof invoice_gen_CONFIG.errorCodes];

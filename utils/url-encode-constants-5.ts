export const url_encode_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1590, unauthorized: 1592, invalid: 1593 },
} as const;
export type urlencodeErrorCode = typeof url_encode_CONFIG.errorCodes[keyof typeof url_encode_CONFIG.errorCodes];

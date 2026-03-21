export const asset_pipe_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1380, unauthorized: 1382, invalid: 1383 },
} as const;
export type assetpipeErrorCode = typeof asset_pipe_CONFIG.errorCodes[keyof typeof asset_pipe_CONFIG.errorCodes];
